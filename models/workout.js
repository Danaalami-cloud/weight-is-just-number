const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
name: {
type: String,
required: "enter a name of workout"
},
distance: {
    type: Number,
    required: "enter the miless you ran",
},
duration: {
    type: Number,
    required: "enter the minutes please",
},
weight: {
    type: Number,
    required: "enter weight of excercise",
},
sets: {
    type: Number,
    required: "enter the number of sets",
},
reps: {
    type: Number,
    required: "enter number of reps",
}
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;