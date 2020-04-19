const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Tasks = require("./models/task");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

//User APIs

//Create Users
app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.status(201).send(user))
    .catch((err) => res.status(400).send(err));
});

//List all Users
app.get("/users", (req, res) =>
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(err))
);

//Fetch Particular User by ID
app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then((user) => {
      if (!user) return res.status(404).send();
      res.send(user);
    })
    .catch((err) => res.status(500).send());
});

//Tasks APIs

//Create Tasks
app.post("/tasks", (req, res) => {
  const task = new Tasks(req.body);
  task
    .save()
    .then(() => res.status(201).send(task))
    .catch((err) => res.status(400).send(err));
});

//List all Tasks
app.get("/tasks", (req, res) =>
  Tasks.find({})
    .then((tasks) => res.send(tasks))
    .catch((err) => res.status(500).send())
);

//Fetch particular Task by ID
app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;
  Tasks.findById(_id)
    .then((task) => {
      if (!task) return res.status(404).send();
      res.send(task);
    })
    .catch((err) => res.status(500).send());
});

app.listen(PORT, () => console.log("Server on PORT", PORT));
