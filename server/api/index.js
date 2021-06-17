const router = require("express").Router();
module.exports = router;

router.use("/sauces", require("./sauces"));
router.use("/users", require("./users"));
router.use("/carts", require("./carts"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
