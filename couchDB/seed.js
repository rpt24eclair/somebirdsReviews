const { generateShoes } = require('./shoes.js');
const { generateReviews } = require('./reviews.js');

const generate = async () => {
  await generateShoes();
  await generateReviews();
};

generate();