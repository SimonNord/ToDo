var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
  text: String,
});

const ToDoModel = mongoose.model("ToDoModel", ToDoSchema);

module.exports = ToDoModel;
