const couchimport = require('couchimport');
const  { username, password } = require('../utils/creds.js');

const shoesOpts = { delimiter: ',', url: `http://${username}:${password}@127.0.0.1:5984`, database: 'sdc_somebirds_shoes' };
const reviewsOpts = { delimiter: ',', url: `http://${username}:${password}@127.0.0.1:5984`, database: 'sdc_somebirds_reviews' };

let insertShoes = async () => {
  await couchimport.importFile('shoes.csv', shoesOpts, (err,data) => {
    console.log('shoes entered', err, data);
  });
};

let insertReviews = async () => {
  await couchimport.importFile('reviews.csv', reviewsOpts, (err,data) => {
    console.log('shoes entered', err, data);
  });
};

module.exports = {
  insertShoes: insertShoes,
  insertReviews: insertReviews
};