const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const database = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to DB.");
    }
    console.log("Connected to DB.");
    const db = client.db(database);
    db.collection("users").insertOne({
      name: "Aravind",
      age: 23,
    });
  }
);
