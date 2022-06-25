const product = require("../models/productmodel");
const express = require("express");
const router = express.Router();

router.get("/api/products", async (req, res) => {
  const products = await product.find();
  res.send(products);
});

router.post("/api/products", async (req, res) => {
  const newProduct = new product(req.body);
  const savep = await newProduct.save();
  res.send(savep);
});

router.delete("/api/products/:id", async (req, res) => {
  const deletP = await product.findByIdAndDelete(req.params.id);
  res.send(deletP);
});

module.exports = router;
