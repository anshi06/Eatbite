require('dotenv').config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URI

async function connectToDB() {
  mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("mongo connected!");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectToDB;
