const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/envs');

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
     Character: conn.model('character', require('./schemas/characterSchema')),
     Film: conn.model('film', require('./schemas/filmsSchema')),
     Planet: conn.model('planet', require('./schemas/planetSchema'))
};