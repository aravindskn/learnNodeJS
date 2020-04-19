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

    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("5e9b2f6f9530c0c61d73c094") },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    db.collection("tasks")
      .updateMany({ completed: false }, { $set: { completed: true } })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
