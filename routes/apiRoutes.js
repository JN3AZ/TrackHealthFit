const Workout = require("../models/workout");

module.exports = function (app) {
  //reaches out to the api.js file to get the last logged workout
  app.get("/api/workouts", (req, res) => {
    db.Workout.find()
      .then((workoutdata) => {
        res.json(workoutdata);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
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
  app.post("/api/workouts", async (req, res) => {
    try {
      const response = await db.Workout.create({ type: "workout" });
      res.json(response);
    } catch (err) {
      console.log("there was an error while creating the workout", err);
    }
  });

  //this is where a new workout will be created by calling on the api.js
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    const workoutId = params.id;
    let savedExercises = [];

    //this will collect all the saved exercises in the workout
    db.Workout.find({ _id: workoutId })
      .then((dbWorkout) => {
        savedExercises = dbWorkout[0].exercises;
        res.json(dbWorkout[0].exercises);
        let allExercises = [...savedExercises, body];
        updateWorkout(allExercises);
      })
      .catch((err) => {
        res.json(err);
      });
    function updateWorkout(exercises) {
      db.Workout.findByIdAndUpdate(
        workoutId,
        { exercises: exercises },
        function (err, doc) {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });

};
