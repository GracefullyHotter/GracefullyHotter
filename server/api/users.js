const router = require("express").Router();
const {
  models: { User },
} = require("../db");

const adminMiddleware = require("./adminMiddleware");

//GET /api/users
router.get("/", adminMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "email", "name", "isAdmin"],
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

//GET /api/users/:id
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await User.findByPk(id);
    res.send(users);
  } catch (err) {
    next(err);
  }
});

//GET /api/users/profile
router.get("/profile", async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { id } = await jwt.verify(token, process.env.JWT);

    if (token) {
      const user = await User.findByPk(id);
      res.send(user);
    }
  } catch (err) {
    next(err);
  }
});

//PUT /api/users/:id
router.put("/:id", adminMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.send(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

//DELETE /api/users/:id
router.delete("/:id", adminMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    await user.destroy();
    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
