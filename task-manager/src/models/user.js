const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Email was not valid.");
    },
    trim: true,
    lowercase: true,
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Age must be greater than 0.");
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [7, "Password must have greater than of 6 characters"],
    validate(value) {
      if (validator.contains(value, "password"))
        throw new Error("Password must not contain string password.");
    },
  },
});

module.exports = User;
