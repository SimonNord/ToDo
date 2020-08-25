const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// get all resources
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: error });
  }
});

// create resource
router.post("/", async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
