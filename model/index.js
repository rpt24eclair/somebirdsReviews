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

function addReview(review) {
  return Review.create(review);
}

function deleteReview(id) {
  return Review.destroy({
    where: { id: id }
  });
}

function updateReview(id, updatedReview) {
  return Review.update(
    updatedReview,
    {
      where: {
        id: id
      }
    }
  )
}

module.exports = {
  getReviews,
  getRating,
  addReview,
  deleteReview,
  updateReview,
};