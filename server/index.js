require('newrelic');
const express = require ('express');
const controller = require('../controller/index.js');
const app = express();
const PORT = 3003;

const redis = require("redis");
const client = redis.createClient();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*app.get('/shoes/:shoeId/reviews/:count', (req, res) => {
  let { shoeId, count } = req.params;
    controller.getReviews(shoeId, count)
    .then(data => {
      res.send(data);
    })
  .catch(err => {
      console.error(err);
      res.end();
  });
});*/

app.get('/shoes/:shoeId/reviews/:count', (req, res) => {
  let {shoeId, count } = req.params;
  let redisKey = JSON.stringify(shoeId);
  client.get(redisKey, (err, reply) => {
    if (reply === null) {
      controller.getReviews(shoeId, count)
      .then(data => {
        client.set(redisKey, JSON.stringify(data), (err, reply) => {
          res.send(data);
        })
      })
      .catch(err => {
        console.error(err);
        res.end();
      });
    } else {
      res.send(reply);
    }

  });
});


/*app.get('/shoes/:shoeId/rating', (req, res) => {
  let { shoeId } = req.params;
  controller.getRating(shoeId)
  .then(data => {
      res.send(data);
    })
  .catch(err => {
      console.error(err);
      res.end();
    });
});*/

app.get('/shoes/:shoeId/rating', (req, res) => {
  let { shoeId } = req.params;
  let redisKey = JSON.stringify(shoeId) + 'Rating';

  client.get(redisKey, (err, reply) => {
    if (reply === null) {
      controller.getRating(shoeId)
      .then(data => {
        client.set(redisKey, JSON.stringify(data), (err, reply) => {
          res.send(data);
        })
      })
      .catch(err => {
	console.error(err);
        res.end();
      });
    } else {
      res.send(reply);
    }
  });
});



app.get('/loaderio-ad86e0e6363899bac5347efd1f2eb790/', (req, res) => {
  console.log('its hitting the get endpoint');

  res.attachment('loaderio-ad86e0e6363899bac5347efd1f2eb790.txt')
  res.type('txt')
  res.send('loaderio-ad86e0e6363899bac5347efd1f2eb790');;
});

module.exports = app;

