const router = require("express").Router();
const {
  models: { Cart, CartItem, Sauce },
} = require("../db");

// GET /api/carts
router.get("/", async (req, res, next) => {
  try {
    const carts = await Cart.findAll({
      include: {
        model: Sauce,
      },
    });
    res.send(carts);
  } catch (error) {
    next(error);
  }
});

// GET /api/carts/completed
router.get("/completed", async (req, res, next) => {
  try {
    const carts = await Cart.findAll({
      where: {
        isCompleted: true,
      },
      include: Sauce,
    });
    res.send(carts);
  } catch (error) {
    next(error);
  }
});

// GET /api/carts/active/:userId
router.get("/active/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId
    const cart = await Cart.findOne({
      where: {
        userId: userId,
        isCompleted: false,
      },
      include: Sauce,
    });
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// GET /api/carts/orders/:userId
router.get("/orders/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const carts = await Cart.findAll({
      where: {
        userId: userId,
        isCompleted: true,
      },
      include: Sauce,
    });
    res.send(carts);
  } catch (error) {
    next(error);
  }
});

// POST /api/carts
router.post("/", async (req, res, next) => {
  try {
    const { userId, sauces } = req.body;
    const cart = await Cart.create({ userId: userId });

    sauces.forEach(async (sauce) => {
      await CartItem.create({
        cartId: cart.id,
        sauceId: sauce.id,
        quantity: sauce.quantity,
        price: sauce.price,
      });
    });

    res.send(cart);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
