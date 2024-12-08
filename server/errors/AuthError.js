class AuthError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 401;
  }
}

module.exports = AuthError;
