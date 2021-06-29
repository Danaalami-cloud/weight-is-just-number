const router = require("express").Router();
const workout = require("../models/workout");

router.post("/api/transaction", ({ body} , res) => {
    workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workout/")