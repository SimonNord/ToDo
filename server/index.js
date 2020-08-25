require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the landing page");
});

// toDo Routes
const todoRoutes = require("./routes/todos");
app.use("/todos", todoRoutes);

//Connection to MongoDB
mongoose.connect(
  process.env.DATABASE_CONNECTION_STRING,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to DB");
  }
);

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
