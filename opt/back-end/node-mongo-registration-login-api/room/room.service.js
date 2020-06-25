const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
var Room = require('./room.model');
const User = db.User;
const awsIot = require('aws-iot-device-sdk'); 
var roomModel = require('./room.model');


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
    return roomModel = await getIoTRoom();
}

async function getIoTRoom() {
    return new Promise(resolve => {
        const NODE_ID = 'Pi3-DHT11-Node';
        const TAG = '[TEST THING] >>>>>>>>> ';

        console.log(TAG, 'Connecting...');

        var device = awsIot.device({
            keyPath: './certs/d87d338973-private.pem.key',
            certPath: './certs/d87d338973-certificate.pem.crt',
            caPath: './certs/AmazonRootCA1.pem',
            clientId: NODE_ID,
            host: 'ameccrc8iof81-ats.iot.us-east-2.amazonaws.com',
            port: 8883,
            region: 'us-east-2',
            debug: false, // optional to see logs on console 
        });

        device.on('connect', function () {
            console.log(TAG, 'device connected!');
            device.subscribe('$aws/things/temp-humidity-sensor/shadow/update/accepted');
            device.subscribe('$aws/things/temp-humidity-sensor/shadow/update/rejected');
            // Publish an empty packet to topic `$aws/things/Pi3-DHT11-Node/shadow/get` 
            // to get the latest shadow data on either `accepted` or `rejected` topic 
            device.publish('$aws/things/Pi3-DHT11-Node/shadow/get', '');
        });

        device.on('message', function (topic, payload) {
            payload = JSON.parse(payload.toString());
            console.log(TAG, 'message from ', topic, JSON.stringify(payload, null, 4));
            resolve(JSON.stringify(payload));
        });
    });

}
