const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
// dev db
var url = "mongodb+srv://jonnyparko:<Emerican5875>@cluster0-4r75h.mongodb.net/test?retryWrites=true&w=majority";
// prod db
// mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);

mongoose.connect(url, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};