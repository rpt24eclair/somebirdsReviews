var nano = require('nano');

// console.log(process.env.COUCHDB_URL );
module.exports = nano(process.env.COUCHDB_URL || 'http://sdc_admin:HR2021@127.0.0.1:5984');