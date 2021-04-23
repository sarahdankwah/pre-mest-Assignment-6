const express = require('express');
const router = express.Router();
const userService = require('./user.service');

//routes
router.post('/signIn', signIn)
router.post('/signup', signup)

module.exports = router;


function signIn(req, res, next) {
    userService.signIn(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'email or password is incorrect' }))
        .catch(err => next(err))
}

function signup(req, res, next) {
    userService.signup(req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}