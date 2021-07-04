const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        required: "enter a name of workout",
      },
      name: {
        type: String,
        required: "enter a name of workout",
      },
      distance: {
        type: Number,
     
      },
      duration: {
        type: Number,
        required: "enter the duration you worked out",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
