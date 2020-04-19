const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const database = "task-manager";

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to DB.");
    }
    console.log("Connected to DB.");
    const db = client.db(database);

    db.collection("tasks").findOne(
      { _id: new ObjectID("5e9b3867e8b140c773d8a710") },
      (error, task) => {
        if (error) {
          return console.log("Error");
        }

        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log("Error");
        }

        console.log(tasks);
      });
  }
);
