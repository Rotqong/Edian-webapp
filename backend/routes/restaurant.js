const router = require('express').Router();
let Resto = require('../models/restaurant.model');

router.route('/').get((req, res) => {
    Resto.find()
        .then(restaurant => res.json(restaurant))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    //add params here

    const newResto = new Resto({/*and here*/});

    newResto.save()
        .then(() => res.json('Restaurant added into Database'))
        .catch(err => res.status(400).json('Error: ' + err));
});