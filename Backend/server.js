const express = require("express");

// dot env
require("dotenv").config();

// express app
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

// listening to port
app.listen(process.env.PORT, () => {
  console.log("listening to port ", process.env.PORT);
});
