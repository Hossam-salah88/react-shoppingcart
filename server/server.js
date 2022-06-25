const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const product = require("./models/productmodel");
const router = require("./routes/routes");
const app = express();
app.use(bodyParser.json());

app.use("/", router);

const conectionString = "mongodb://localhost/react-shopping-cart";

mongoose
  .connect(conectionString, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then((res) => console.log("conection Done"));

app.listen(5000, () => {
  console.log("server Running");
});
