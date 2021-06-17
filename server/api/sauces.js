const router = require("express").Router();
const {
  models: { Sauce },
} = require("../db");

//GET /api/sauces
router.get("/", async (req, res, next) => {
  try {
    const sauces = await Sauce.findAll();
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});

//GET /api/sauces/${id}
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const sauces = await Sauce.findByPk(id);
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});

//DELETE /api/sauces/${id}
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const sauceToDestroy = await Sauce.findByPk(id);
    await sauceToDestroy.destroy();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

//PUT /api/sauces/${id}
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const sauceToUpdate = await Sauce.findByPk(id);
    res.send(await sauceToUpdate.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
