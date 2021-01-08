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
      resolve({ id, name, model, rating_average, fit_feedback_average, review_count });
    })
    .catch(err => {
      reject(err);
    });
  });
}

module.exports.getReviews = getReviews;
module.exports.getRating = getRating;