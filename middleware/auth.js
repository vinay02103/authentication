// middleware/auth.js
const jwt = require("jsonwebtoken");
const secret = "your_jwt_secret"; // Replace with a secure secret

function auth(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
}

module.exports = auth;
