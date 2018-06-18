const crypto = require("crypto")
  .randomBytes(256)
  .toString("hex");

module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: crypto
};
