const express = require("express");

// * importing mongoose
const mongoose = require("mongoose");

// dot env
require("dotenv").config();

// * importing router
const router = require("./routes/router");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts/", router);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening to port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
// listening to port
