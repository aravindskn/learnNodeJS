const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
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

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
