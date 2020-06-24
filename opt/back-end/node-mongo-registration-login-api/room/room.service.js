const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Room = require('./room.model');
const User = db.User;

module.exports = {
    authenticate,
    getRoom,
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...user.toJSON(),
            token
        };
    }
}

async function getRoom() {
    return await Room.find();
}