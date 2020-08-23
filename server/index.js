require("dotenv").config();

const express = require("express");
const { urlencoded } = require("express");
const app = express();

const mongoose = require("mongoose");

app.use("/", (req, res) => {
  res.send("This is the landing page");
});

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
