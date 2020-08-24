require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the landing page");
});

// toDo Routes
const toDoRoutes = require("./routes/toDos");
app.use("/todos", toDoRoutes);

//Connection to MongoDB
mongoose.connect(
  process.env.DATABASE_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
