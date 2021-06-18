const {
  models: { User },
} = require("../db");
const jwt = require("jsonwebtoken");

async function ensureAdmin(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);
    if (user.isAdmin) return next();
    else {
      res.sendStatus(401);
    }
  } else {
    return res.json({ message: "no token" });
  }
}

module.exports = ensureAdmin;
