require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const morgan = require("morgan");

const connectDB = require("./config/db");

const auth = require("./middlewares/auth");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(require("cors")());

app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/contact"));

const PORT = 8000;
app.listen(PORT, () => {
  connectDB();
  console.log(`server listening on port: ${PORT}`);
});