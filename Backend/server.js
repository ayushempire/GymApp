const express = require("express");

// express app
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

// listening to port
app.listen(4000, () => {
  console.log("listening to port 4000");
});
