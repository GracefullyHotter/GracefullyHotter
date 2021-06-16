//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/user");
const Sauce = require("./models/sauce");
const Cart = require("./models/cart");
const CartItem = require("./models/cartItem");

//associations could go here!
User.hasMany(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

Sauce.hasOne(CartItem);
CartItem.belongsTo(Sauce);

module.exports = {
  db,
  models: {
    User,
    Sauce,
    Cart,
    CartItem,
  },
};
