const couchimport = require('couchimport');
const  { username, password } = require('../utils/creds.js');

const shoesOpts = { delimiter: ',', url: `http://${username}:${password}@127.0.0.1:5984`, database: 'sdc_somebirds_shoes' };

couchimport.importFile('shoes.csv', shoesOpts, (err,data) => {
  console.log('Shoes entered', err, data);
});