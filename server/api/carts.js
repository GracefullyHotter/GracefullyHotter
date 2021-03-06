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

// PUT /api/carts/merge
router.put("/merge", async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { id } = await jwt.verify(token, process.env.JWT);

    const cart = await Cart.findOne({
      where: {
        userId: id,
        isCompleted: false,
      },
      include: {
        model: Sauce,
      },
    });

    const cartSauceIds = cart.sauces.map((sauce) => {
      return sauce.id;
    });

    let cartSauces = cart.sauces;

    req.body.forEach(async (item) => {
      if (cartSauceIds.includes(item.id)) {
        const cartIdx = cartSauceIds.indexOf(item.id);
        const dbQuantity = cartSauces[cartIdx].cartItem.quantity;
        const newQuantity = dbQuantity + item.quantity;

        await CartItem.update(
          { quantity: newQuantity },
          {
            where: {
              cartId: cart.id,
              sauceId: item.id,
            },
          }
        );
      } else {
        await CartItem.create({
          cartId: cart.id,
          sauceId: item.id,
          quantity: item.quantity,
          price: item.price,
          name: item.name,
          imageURL: item.imageURL,
        });
      }
    });

    const updatedCartItems = await CartItem.findAll({
      where: {
        cartId: cart.id,
      },
    });

    res.send(updatedCartItems);
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

    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// GET /api/carts/orders
router.get("/orders", async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { id } = await jwt.verify(token, process.env.JWT);

    const carts = await Cart.findAll({
      where: {
        userId: id,
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
    let id;

    if (token) {
      const data = await jwt.verify(token, process.env.JWT);
      id = data.id;
    } else {
      id = null;
    }

    const cart = await Cart.create({
      userId: id,
    });

    if (!id) {
      cart.isCompleted = true;
      await cart.save();
    }

    req.body.forEach(async (item) => {
      await CartItem.create({
        cartId: cart.id,
        sauceId: item.id,
        quantity: item.quantity,
        price: item.price,
        name: item.name,
        imageURL: item.imageURL,
      });
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

// PUT /api/carts/checkout
router.put("/checkout", async (req, res, next) => {
  try {
    const token = req.body.headers.authorization;
    const { id } = await jwt.verify(token, process.env.JWT);

    const cart = await Cart.findOne({
      where: {
        userId: id,
        isCompleted: false,
      },
    });

    cart.isCompleted = true;

    await cart.save();
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// PUT /api/carts/:cartId
router.put("/:cartId", async (req, res, next) => {
  try {
    const cartId = req.params.cartId;
    const { id, price, quantity, name, imageURL } = req.body;
    const sauce = await Sauce.findByPk(id);
    const cart = await Cart.findByPk(cartId);

    cart.addSauce(sauce, {
      through: {
        quantity: quantity,
        price: price,
        name: name,
        imageURL: imageURL,
      },
    });

    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/carts/:id/
router.delete("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    await cart.destroy();
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/carts/active/:id
router.delete("/active/:cartItemId", async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { id } = await jwt.verify(token, process.env.JWT);

    const cart = await Cart.findOne({
      where: {
        userId: id,
        isCompleted: false,
      },
      include: Sauce,
    });

    cart.dataValues.sauces.forEach(async (sauce) => {
      if (sauce.dataValues.id === Number(req.params.cartItemId)) {
        await sauce.destroy();
      }
    });

    res.send(cart);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
