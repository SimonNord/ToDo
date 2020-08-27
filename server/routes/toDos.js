const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// get all resources
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
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

// update resource

router.patch("/:todoId", async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      { _id: req.params.todoId },
      {
        text: req.body.text,
      }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

// delete resource

router.delete("/:todoId", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete({
      _id: req.params.todoId,
    });
    res.json(deletedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
