const express = require ('express');
const controller = require('../controller/index.js');
const app = express();
const PORT = 3003;

app.use(express.static('public'));

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

module.exports = app;