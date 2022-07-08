require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/routes");
const orderRouter = require("./routes/orderRoutes");
const runDB = require("./config/db");
const app = express();

// mongodb+srv://hossam_salah:<password>@react.9ceacxu.mongodb.net/?retryWrites=true&w=majority

console.log(process.env.NODE_ENV);
// ============= routers ============================
app.use(bodyParser.json());
app.use("/", productRouter);
app.use("/", orderRouter);

//============ run Data Base ==========================
runDB();

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("public"));

  app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
} else {
  app.get("/", (req, res) => res.send("API Runinng..."));
}
//====================================
const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
  console.log("server Running");
});
