const mongoose = require("mongoose");
const validator = require("validator");

const database = "task-manager-api";
const connectionURL = "mongodb://127.0.0.1:27017/" + database;

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     validate(value) {
//       if (!validator.isEmail(value)) throw new Error("Email was not valid.");
//     },
//     trim: true,
//     lowercase: true,
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) throw new Error("Age must be greater than 0.");
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: [7, "Password must have greater than of 6 characters"],
//     validate(value) {
//       if (validator.contains(value, "password"))
//         throw new Error("Password must not contain string password.");
//     },
//   },
// });

// const newUser = new User({
//   name: "Ruthvik  ",
//   email: "ruthvik@example.COM",
//   password: "passwo",
// });

// newUser
//   .save()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

const Tasks = mongoose.model("Tasks", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const newTask = new Tasks({
  description: "Task 2",
  completed: true,
});

newTask
  .save()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
