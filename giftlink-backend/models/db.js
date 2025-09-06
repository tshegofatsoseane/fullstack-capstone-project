// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017";
const dbName = "giftdb";

let dbInstance = null;

async function connectToDatabase() {
  if (dbInstance) {
    return dbInstance;
  }

  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  dbInstance = client.db(dbName);
  console.log(`✅ Connected to MongoDB: ${dbName}`);

  return dbInstance;
}

module.exports = connectToDatabase;
