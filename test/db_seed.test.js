const { Shoe, Review, Connection } = require('../db/index.js');

let shoes;
let reviews;

afterAll(() => {
  Connection.close();
});

test('shoes table has 100 records', () => {
  return Shoe.findAll()
  .then(data => {
    shoes = data;
    expect(data.length).toBe(100);
  })
});

test('reviews table has 1200 records', () => {
  return Review.findAll()
  .then(data => {
    reviews = data;
    expect(data.length).toBe(1200);
  })
});

test('shoes records data shape is correct', () => {
  let shoe1 = shoes[0];
  expect(typeof shoe1.name).toBe('string');
  expect(typeof shoe1.model).toBe('number');
  expect(typeof shoe1.rating_average).toBe('string');
  expect(typeof shoe1.fit_feedback_average).toBe('string');
  expect(typeof shoe1.review_count).toBe('number');
});

test('reviews records data shape is correct', () => {
  let review1 = reviews[0];
  expect(typeof review1.name).toBe('string');
  expect(typeof review1.headline).toBe('string');
  expect(typeof review1.review).toBe('string');
  expect(typeof review1.rating).toBe('number');
  expect(typeof review1.fit_feedback).toBe('number');
  expect(typeof review1.shoe_id).toBe('number');
});