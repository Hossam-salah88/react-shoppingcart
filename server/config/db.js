const mongoose = require("mongoose");

const conectionString = "mongodb://localhost/react-shopping-cart";

function runDB() {
  mongoose
    .connect(conectionString, {
      usenewurlparser: true,
      useunifiedtopology: true,
    })
    .then((res) => console.log("conection Done"));
}

module.exports = runDB;
