const jwt = require("jsonwebtoken")

const generateToken = (user) => {
  // Generate JWT token
  const payload = {
    user_id: user._id,
    username: user.username,
    user_email: user.email,
  };
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
};

module.exports.generateToken = generateToken;
