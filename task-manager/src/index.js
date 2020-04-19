const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Tasks = require("./models/task");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

//User APIs
app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.send(user))
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Tasks APIs
app.post("/tasks", (req, res) => {
  const task = new Tasks(req.body);
  task
    .save()
    .then(() => res.send(task))
    .catch((err) => res.status(400).send(err));
});

app.listen(PORT, () => console.log("Server on PORT", PORT));
