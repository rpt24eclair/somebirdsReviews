var couchimport = require('couchimport');

var opts = { delimiter: ",", url: 'http://sdc_admin:HR2021@127.0.0.1:5984', database: 'sdc_somebirds_shoes' };

couchimport.importFile('shoes.csv', opts, function(err,data) {
  console.log("done",err,data);
});