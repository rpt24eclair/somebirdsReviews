const express = require ('express');
const app = express();
const { Shoe, Review } = require('../db/index.js');
const PORT = 3003;

app.use(express.static('public'));

app.get('/shoes/:shoeId/reviews/:count', (req, res) => {
  let { shoeId, count } = req.params;
  Review.findAll({
    order: [
      ['id', 'DESC']
    ],
    limit: parseInt(count),
    where: {
      shoe_id: shoeId
    },
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.error(err);
    res.end();
  })
});

app.get('/shoes/:shoeId/rating', (req, res) => {
  let { shoeId } = req.params;
  Shoe.findAll({
    where: {
      model: shoeId
    }
  })
  .then((data) => {
    let { model, rating_average, fit_feedback_average, review_count } = data[0];
    res.send({ model, rating_average, fit_feedback_average, review_count });
  })
  .catch(err => {
    console.error(err);
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});