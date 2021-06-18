const router = require("express").Router();
const {
  models: { Cart, CartItem, Sauce },
} = require("../db");
const jwt = require("jsonwebtoken");

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

// GET /api/carts/active/
router.get("/active", async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { id } = await jwt.verify(token, process.env.JWT);

    // const userId = req.params.userId;
    const cart = await Cart.findOne({
      where: {
        userId: id,
        isCompleted: false,
      },
      include: Sauce,
    });
    console.log(cart);
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
      include: {
        model: Sauce,
      },
    });
    res.send(carts);
  } catch (error) {
    next(error);
  }
});

// POST /api/carts
router.post("/", async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { id } = await jwt.verify(token, process.env.JWT);

    const cart = await Cart.create({
      userId: id,
    });

    await CartItem.create({
      cartId: cart.id,
      sauceId: req.body.id,
      quantity: req.body.quantity,
      price: req.body.price,
    });

    // items.forEach(async (sauce) => {
    //   await CartItem.create({
    //     cartId: cart.id,
    //     sauceId: sauce.id,
    //     quantity: sauce.quantity,
    //     price: sauce.price,
    //   });
    // });

    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// PUT /api/carts/:cartId
router.put("/:cartId", async (req, res, next) => {
  try {
    const cartId = req.params.cartId;
    const { id, price, quantity } = req.body;
    const sauce = await Sauce.findByPk(id);
    const cart = await Cart.findByPk(cartId);

    cart.addSauce(sauce, { through: { quantity: quantity, price: price } });

    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/carts/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    await cart.destroy();
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
