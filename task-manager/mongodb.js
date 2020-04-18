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
    // db.collection("users").insertOne(
    //   {
    //     name: "Aravind",
    //     age: 23,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert User.");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Mahidhar",
    //       age: 24,
    //     },
    //     {
    //       name: "Ruthvik",
    //       age: 23,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert docs.");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    db.collection("tasks").insertMany(
      [
        {
          description: "Task 1",
          completed: false,
        },
        {
          description: "Task 2",
          completed: false,
        },
        {
          description: "Task 3",
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unabel to insert docs.");
        }

        console.log(result.ops);
      }
    );
  }
);
