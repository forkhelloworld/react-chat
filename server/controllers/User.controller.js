const bcrypt = require("bcrypt");
const { User, RefreshToken } = require("../models");
const { deletePassword } = require("../utils/deletePassword");
const { createTokenPair } = require("../services/tokenService");
const { verifyRefreshToken } = require("../services/tokenService");
const AuthError = require("../errors/AuthError");

module.exports.signUp = async (req, res, next) => {
  try {
    const { body, file } = req;
    const createdUser = await User.create({
      ...body,
      imagePath: file?.filename,
    });
    const readyUser = deletePassword(createdUser);

    const tokens = await createTokenPair({
      userId: readyUser.id,
      email: readyUser.email,
    });
    await RefreshToken.create({
      token: tokens.refreshToken,
      userId: readyUser.id,
    });
    res.status(201).send({ data: readyUser, tokens });
  } catch (error) {
    next(error);
  }
};

module.exports.signIn = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    const foundUser = await User.findOne({
      email,
    });
    if (!foundUser) {
      throw new Error("User not found");
    }
    const result = await bcrypt.compare(password, foundUser.passwordHash);
    if (!result) {
      throw new Error("Invalid data");
    }
    const tokens = await createTokenPair({
      userId: foundUser._id,
      email: foundUser.email,
    });
    const add = await RefreshToken.create({
      token: tokens.refreshToken,
      userId: foundUser._id,
    });

    res.status(200).send({ data: deletePassword(foundUser), tokens });
  } catch (error) {
    next(error);
  }
};

module.exports.refreshSession = async (req, res, next) => {
  try {
    const {
      body: { refreshToken },
    } = req;
    let verifyResult;
    try {
      verifyResult = await verifyRefreshToken(refreshToken);
    } catch (error) {
      next(new AuthError("Invalid refresh token"));
    }

    if (verifyResult) {
      const foundUser = await User.findOne({
        email: verifyResult.email,
      });
      const rftFromDB = await RefreshToken.findOne({
        $and: [
          {
            token: refreshToken,
          },
          {
            userId: foundUser._id,
          },
        ],
      });

      if (rftFromDB) {
        await rftFromDB.deleteOne();
        const tokenPair = await createTokenPair({
          userId: foundUser._id,
          email: foundUser.email,
        });

        await RefreshToken.create({
          token: tokenPair.refreshToken,
          userId: foundUser._id,
        });
        res.status(200).send({ tokens: tokenPair });
      } else {
        throw new AuthError("Token not found");
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports.getUserData = async (req, res, next) => {
  try {
    const {
      payload: { userId },
    } = req;
    const foundUser = await User.findById(userId);
    if (!foundUser) {
      throw new Error("User not found");
    }
    res.status(200).send({ data: foundUser });
  } catch (error) {
    next(error);
  }
};
