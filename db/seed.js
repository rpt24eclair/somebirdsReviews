const { generateShoes } = require('./generate_shoes.js');
const { generateReviews } = require('./generate_reviews.js');

const generate = async () => {
  await generateShoes();
  await generateReviews();
};

generate();