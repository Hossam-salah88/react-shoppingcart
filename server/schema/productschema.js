const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
  id: String,
  title: String,
  imgUrl: String,
  des: String,
  price: Number,
  sizes: [String],
});

module.exports = productschema;
