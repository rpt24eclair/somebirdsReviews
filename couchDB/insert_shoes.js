const couchimport = require('couchimport');
const  { username, password } = require('../utils/creds.js');

const opts = { type:'jsonl', url: `http://${username}:${password}@127.0.0.1:5984`, database: 'sdc_somebirds_feedback'};

couchimport.importFile('shoes.csv', opts, function(err,data) {
  console.log('shoes entered',err,data);
});