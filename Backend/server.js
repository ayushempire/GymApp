const express = require("express");

// dot env
require("dotenv").config();

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

// listening to port
app.listen(process.env.PORT, () => {
  console.log("listening to port ", process.env.PORT);
});
