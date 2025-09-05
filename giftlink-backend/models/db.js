// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    const db = await connectToDatabase();

    // Task 2: Connect to database giftDB and store in variable dbInstance
    const collection = db.collection("users");

    // Task 3: Return database instance
    const theUser = await collection.findOne({ email: req.body.email });
}

module.exports = connectToDatabase;
