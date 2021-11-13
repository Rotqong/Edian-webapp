const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').post((req, res) => {
    User.find({
        "username": req.body.username,
        "password": req.body.password
    })
        .then(user => {
            if(user.length == 0){
                res.status(400).json({
                    status: "error",
                    message: "Username or password not match"
                });
            } else {
                res.json(user);
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({username, password});

    newUser.save()
        .then(() => res.json('User Created!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json('User Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;