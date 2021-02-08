const couchimport = require('couchimport');
const  { username, password } = require('../utils/creds.js');

const shoesOpts = { delimiter: ',', url: `http://${username}:${password}@127.0.0.1:5984`, database: 'sdc_somebirds_reviews' };

couchimport.importFile('reviews.csv', shoesOpts, (err,data) => {
  console.log('Reviews entered', err, data);
});