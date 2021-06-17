const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

//GET /api/users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "email", "name", "isAdmin"],
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

//PUT /api/users/:id
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.send(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

//DELETE /api/users/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    await user.destroy();
    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
});
