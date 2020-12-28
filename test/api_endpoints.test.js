const app = require('../server/index.js');
const supertest = require('supertest');
const { Connection } = require('../db/index.js');
const request = supertest(app);

let reviewResponse;
let ratingResponse;

afterAll(() => {
  Connection.close();
});

it('GETs the correct response from /shoes/:shoeId/reviews/:count endpoint', async (done) => {
  reviewResponse = await request.get('/shoes/1/reviews/5');
  expect(reviewResponse.status).toBe(200);
  expect(reviewResponse.body.length).toBe(5);
  done();
});

it(`/shoes/:shoeId/reviews/:count endpoint's response datashape is correct`, () => {
  let review1 = reviewResponse.body[0];
  expect(typeof review1.name).toBe('string');
  expect(typeof review1.headline).toBe('string');
  expect(typeof review1.review).toBe('string');
  expect(typeof review1.rating).toBe('number');
  expect(typeof review1.fit_feedback).toBe('number');
  expect(typeof review1.shoe_id).toBe('number');
});

it('GETs the correct response from /shoes/:shoeId/rating endpoint', async (done) => {
  ratingResponse = await request.get('/shoes/1/rating');
  expect(ratingResponse.status).toBe(200);
  expect(typeof ratingResponse.body).toBe('object');
  done();
});

it(`/shoes/:shoeId/rating endpoint's response datashape is correct`, () => {
  let shoe1 = ratingResponse.body;
  expect(typeof shoe1.model).toBe('number');
  expect(typeof shoe1.rating_average).toBe('string');
  expect(typeof shoe1.fit_feedback_average).toBe('string');
  expect(typeof shoe1.review_count).toBe('number');
});