const express = require ('express');
const bodyParser = require('body-parser');
const controller = require('../controller/index.js');
const app = express();
// const PORT = 3003;
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

//read reviews
app.get('/shoes/:shoeId/reviews/:count', (req, res) => {
  let { shoeId, count } = req.params;
  controller.getReviews(shoeId, count)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.error(err);
    res.end();
  });
});

//read rating
app.get('/shoes/:shoeId/rating', (req, res) => {
  let { shoeId } = req.params;
  controller.getRating(shoeId)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.error(err);
    res.end();
  });
});

//create review
app.post('/shoes/:shoeId/reviews', (req, res) => {
  let { shoeId } = req.params;
  let review = req.body;
  review.shoe_id = Number(shoeId);
  controller.addReview(review)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.error(err);
    res.end();
  });
});

//delete review
app.delete('/shoes/reviews/:id', (req, res) => {
  let { id } = req.params;
  controller.deleteReview(id)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.error(err);
    res.end();
  });
});

//update review
app.put('/shoes/reviews/:id', (req, res) => {
  let { id } = req.params;
  let updatedReview = req.body;
  controller.updateReview(id, updatedReview)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.error(err);
    res.end();
  });
});

module.exports = app;