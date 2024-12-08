const bcrypt = require("bcrypt");

const SALT = 1;

module.exports.hashPass = async (req, res, next) => {
  try {
    const {
      body: { password },
    } = req;

    req.body.passwordHash = await bcrypt.hash(password, SALT);
    next();
  } catch (error) {
    next(error);
  }
};
