const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter in the exercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter in the exercise name",
        },
        duration: {
          type: Number,
          required: " Enter in the exercise total time in munutes",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
        //allows any virtual properties to be included when data is requested
      virtuals: true,
    },
  }
);

// allows a dynamically-created property to be added to the schema
workoutSchema.virtual("totalDuration").get(function() {
  // the array of exercises is reduced to the sum of their durations
  return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;