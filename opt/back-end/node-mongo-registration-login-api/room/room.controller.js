const express = require('express');
const router = express.Router();
const roomService = require('./room.service');

// routes
router.post('/authenticate', authenticate);
router.get('/', room);


module.exports = router;

function authenticate(req, res, next) {
    roomService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function room(req, res, next) {
    roomService.getRoom(req.body)
    .then(room => room ? res.json(room) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
}
