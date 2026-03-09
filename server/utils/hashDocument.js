const crypto = require("crypto");

module.exports = function hashDocument(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
};
