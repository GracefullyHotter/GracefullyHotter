const router = require("express").Router();
const { Op } = require("sequelize");

const {
  models: { Sauce },
} = require("../db");

const adminMiddleware = require("./adminMiddleware");

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

//GET /api/sauces/search/${input}
router.get("/search/:input", async (req, res, next) => {
  try {
    const input = req.params.input.toLowerCase();
    const sauces = await Sauce.findAll({
      where:{
          name : {
              [Op.iLike]: `%${input}%`
          }
      }
    });
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});

//POST /api/sauces
router.post("/", adminMiddleware, async (req, res, next) => {
  try {
    res.status(201).send(await Sauce.create(req.body));
  } catch (error) {
    next(error);
  }
});

//DELETE /api/sauces/${id}
router.delete("/:id", adminMiddleware, async (req, res, next) => {
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
router.put("/:id", adminMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const sauceToUpdate = await Sauce.findByPk(id);
    res.send(await sauceToUpdate.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
