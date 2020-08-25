var mongoose = require("mongoose");

var TodoSchema = mongoose.Schema({
  text: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

const TodoModel = mongoose.model("Todos", TodoSchema);

module.exports = TodoModel;
