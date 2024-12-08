const { promisify } = require("node:util");
const jwt = require("jsonwebtoken");
const {
  CONSTANTS: {
    ACCESS_SECRET_VALUE,
    ACCESS_TIME,
    REFRESH_SECRET_VALUE,
    REFRESH_TIME,
  },
} = require("../constants");

const promisifyJWTSign = promisify(jwt.sign);
const promisifyJWTVerify = promisify(jwt.verify);

const tokenConfig = {
  access: {
    secret: ACCESS_SECRET_VALUE,
    time: ACCESS_TIME,
  },
  refresh: {
    secret: REFRESH_SECRET_VALUE,
    time: REFRESH_TIME,
  },
};

const createToken = ({ userId, email }, { time, secret }) => {
  return promisifyJWTSign(
    {
      userId,
      email,
    },
    secret,
    {
      expiresIn: time,
    },
  );
};

module.exports.createTokenPair = async (payload) => {
  return {
    accessToken: await createToken(payload, tokenConfig.access),
    refreshToken: await createToken(payload, tokenConfig.refresh),
  };
};

const verifyToken = (token, { secret }) => promisifyJWTVerify(token, secret);

module.exports.verifyAccessToken = async (token) =>
  await verifyToken(token, tokenConfig.access);

module.exports.verifyRefreshToken = async (token) =>
  await verifyToken(token, tokenConfig.refresh);
