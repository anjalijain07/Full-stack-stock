const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/Orders.Schema");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };