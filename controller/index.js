const model = require('../model/index.js');
const { getDate } = require('../utils/index.js');

function getReviews(shoeId, count) {
  return new Promise((resolve, reject) => {
    model.getReviews(shoeId, count)
    .then(data => {
      data = data.map(x => {
        return { id: x.id, name: x.name, headline: x.headline, review: x.review, rating: x.rating, fit_feedback: x.fit_feedback, date: getDate(x.createdAt) };
      });
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });
  });
}

function getRating(shoeId) {
  return new Promise((resolve, reject) => {
    model.getRating(shoeId)
    .then((data) => {
      let { id, name, model, rating_average, fit_feedback_average, review_count } = data[0];
      resolve({
        id, name, model, rating_average, fit_feedback_average, review_count
      });
    })
    .catch(err => {
      reject(err);
    });
  });
}

function addReview(review) {
  return new Promise((resolve, reject) => {
    model.addReview(review)
    .then(response => {
      resolve({
        message: `Added review to shoe id ${review.shoe_id}.`
      });
    })
    .catch(err => {
      reject(err);
    });
  }
)};

function deleteReview(id) {
  return new Promise((resolve, reject) => {
    model.deleteReview(id)
    .then(num => {
      if (num === 1) {
        resolve({
          message: "Review was deleted successfully!"
        });
      } else {
        resolve({
          message: `Cannot delete Review with id=${id}.`
        });
      }
    })
    .catch(err => {
      reject(err);
    });
  }
)};

function updateReview (id, updatedReview) {
  return new Promise((resolve, reject) => {
    model.updateReview(id, updatedReview)
    .then(response => {
      resolve({
        message: `Updated review with id ${id}.`
      });
    })
    .catch(err => {
      reject(err);
    });
  }
)};

module.exports = {
  getReviews,
  getRating,
  addReview,
  deleteReview,
  updateReview,
};