const Workout = require("../models/workout");

module.exports = function (app) {
  //reaches out to the api.js file to get the last logged workout
  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .then((workoutdata) => {
        res.json(workoutdata);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find()
      .then((workoutdata) => {
        res.json(workoutdata);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts/range", function (req, res) {
    Workout.create({})
      .then((workoutdata) => res.json(workoutdata))
      .catch((err) => {
        res.json(err);
      });
  });

  //post method creates a new workout in the db
  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then((workoutdata) => res.json(workoutdata))
      .catch((err) => {
        res.json(err);
      });
  });
  //this is where a new workout will be created by calling on the api.js
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((workoutdata) => res.json(workoutdata))
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });
};
