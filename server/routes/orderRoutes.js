const order = require("../models/orderModel");
const express = require("express");
const router = express.Router();

router.get("/api/orders", async (req, res) => {
  const orders = await order.find();
  res.send(orders);
});

router.post("/api/orders", async (req, res) => {
  const newOrder = new order(req.body);
  const saveOrder = await newOrder.save();
  res.send(saveOrder);
});

router.delete("/api/orders/:id", async (res, req) => {
  const deletorder = await order.findByIdAndDelete(req.prams.id);
  res.send(deletorder);
});

module.exports = router;
