const mongoose = require("mongoose");

const database = "task-manager-api";
const connectionURL = "mongodb://127.0.0.1:27017/" + database;

mongoose.connect(connectionURL, {
  useUnifiedTopology: true,
  useCreateIndex: true,
});
