const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const dbURL = process.env.MONGO_URI;

const uri = dbURL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDB() {
  return mongoose.connect(uri);
}

module.exports = connectToDB;
