const nano = require('nano');
const  { username, password } = require('../utils/creds.js');

module.exports = nano(`http://${username}:${password}@127.0.0.1:5984`);