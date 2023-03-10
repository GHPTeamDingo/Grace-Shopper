const db = require("../db");

const User = require("./User");
const Product = require("./Product");
const Order = require("./Order");
const OrderProducts = require("./OrderProducts");

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, {
  through: "OrderProducts",
});

Product.belongsToMany(Order, {
  through: "OrderProducts",
});

module.exports = {
  User,
  Order,
  Product,
  OrderProducts,
  db,
};
