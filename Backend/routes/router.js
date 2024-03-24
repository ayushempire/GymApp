const express = require("express");

const router = express.Router();

//* importing model
const Workout = require("../models/workoutModel");

router.get("/", (req, res) => {
  res.json({ mssg: "get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "get one workout" });
});

router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // res.json({ mssg: "POST new Workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete one workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "update a workout" });
});

module.exports = router;
