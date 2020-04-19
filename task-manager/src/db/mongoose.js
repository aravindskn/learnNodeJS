const mongoose = require("mongoose");

const database = "task-manager-api";
const connectionURL = "mongodb://127.0.0.1:27017/" + database;

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const newUser = new User({
  name: "Aravind",
  age: "Test",
});

newUser
  .save()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
