const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/routes");
const orderRouter = require("./routes/orderRoutes");
const runDB = require("./config/db");
const app = express();

// ============= routers ============================
app.use(bodyParser.json());
app.use("/", productRouter);
app.use("/", orderRouter);

//============ run Data Base ==========================
runDB();

app.listen(5000, () => {
  console.log("server Running");
});
