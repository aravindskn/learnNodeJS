const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Tasks = require("./models/task");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

//User APIs

//Create Users
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

//List all Users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Fetch Particular User by ID
app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) return res.status(404).send();
    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});

//Update user by ID
app.patch("/users/:id", async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "age", "email", "password"];
  const isValidateUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidateUpdate)
    return res.status(400).send({ error: "Invalide Update Option!" });
  try {
    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).send();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Tasks APIs

//Create Tasks
app.post("/tasks", async (req, res) => {
  const task = new Tasks(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

//List all Tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).send();
  }
});

//Fetch particular Task by ID
app.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Tasks.findById(_id);
    if (!task) return res.status(404).send();
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});

//Update task by ID
app.patch("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidateUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidateUpdate)
    return res.status(400).send({ error: "Invalid Update Option!" });
  try {
    const task = await Tasks.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) return res.status(404).send();
    res.send(task);
  } catch (error) {
    res.status(400).send();
  }
});

app.listen(PORT, () => console.log("Server on PORT", PORT));
