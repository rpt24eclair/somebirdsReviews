const shoes = require('../couchdb').use('sdc_somebirds_shoes');
const reviews = require('../couchdb').use('sdc_somebirds_reviews');

const createShoe = function (shoesDocs, cb) {
  shoes.bulk(shoesDocs, cb);
};

const createReview = function (reviewsDocs, cb) {
  reviews.bulk(reviewsDocs, cb);
};

module.exports = {
  createShoe: createShoe,
  createReview: createReview
};