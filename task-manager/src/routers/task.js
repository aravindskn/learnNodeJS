const express = require("express");
const router = new express.Router();
const Tasks = require("../models/task");

//Tasks APIs

//Create Tasks
router.post("/tasks", async (req, res) => {
  const task = new Tasks(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

//List all Tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).send();
  }
});

//Fetch particular Task by ID
router.get("/tasks/:id", async (req, res) => {
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
router.patch("/tasks/:id", async (req, res) => {
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

//Delete a Task by ID
router.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Tasks.findByIdAndDelete(_id);
    if (!task) return res.status(404).send();
    res.status(204).send();
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
