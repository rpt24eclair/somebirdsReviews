const { generateShoes } = require('./shoes.js');
const { generateReviews } = require('./reviews.js');
const { insertShoes, insertReviews } = require('./insert.js');

let generate = async () => {
  await generateShoes();
  await generateReviews();
  await insertShoes();
  await insertReviews();
};

generate();