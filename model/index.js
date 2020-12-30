const { Shoe, Review } = require('../db/index.js');

function getReviews(shoeId, count) {
  return Review.findAll({
    order: [
      ['id', 'DESC']
    ],
    limit: parseInt(count),
    where: {
      shoe_id: shoeId
    },
  });
}

function getRating(shoeId) {
  return Shoe.findAll({
    where: {
      model: shoeId
    }
  });
}

module.exports.getReviews = getReviews;
module.exports.getRating = getRating;