const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../../src/models/user");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "TestUser",
  email: "test@test.com",
  password: "Test123",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, "learningnodejs"),
    },
  ],
};

const setUpDatabase = async () => {
  await User.deleteMany();
  await new User(userOne).save();
};

module.exports = {
  userOneId,
  userOne,
  setUpDatabase,
};
