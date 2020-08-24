const express = require("express");
const router = express.Router();

const ToDo = require("../models/Todo");

//get all totos
router.get("/", async (req, res) => {
  console.log("trying to get todos");
  try {
    let todos = await ToDo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: error });
  }
});

// create new todo
router.post("/", async (req, res) => {
  todo = new ToDo({
    text: req.body.text,
  });
  try {
    savedToDo = await todo.save();
    res.json(savedToDo);
  } catch (error) {
    res.json({ message: error });
  }
});

// update todo
router.patch("/:toDoId", (req, res) => {});

// delete todos
router.delete("/toDoId", (req, res) => {});

module.exports = router;
