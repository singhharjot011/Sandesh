const mongoose = require("mongoose");
const app = require("./app.js");
const dotenv = require("dotenv");

dotenv.config();

const DB = "mongodb://127.0.0.1:27017/sandesh";

mongoose
  .connect(DB)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => console.error("DB Connection Error:", err));

const port = process.env.PORT || 8000;
const ip = process.env.IP || "127.0.0.1";

app.listen(port, () => {
  console.log(`App running on ip ${ip} port ${port}...`);
});
