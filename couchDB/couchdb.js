var nano = require('nano');

// console.log(process.env.mySQL_PORT);
module.exports = nano('http://sdc_admin:HR2021@127.0.0.1:5984');