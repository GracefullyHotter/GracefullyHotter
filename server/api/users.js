const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//ignore this api route, this is just to see how to review cart data out of postgres
router.get("/carts/:id", async (req, res, next) => {
  try {
    const { cart } = await User.findByPk(req.params.id, {
      attributes: ["cart"],
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});
