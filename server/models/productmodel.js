const mongoose = require("mongoose");
const productschema = require("../schema/productschema");

const product = mongoose.model("product", productschema);
module.exports = product;
