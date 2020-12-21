const { Shoe, Review } = require('./index.js');
const faker = require('faker');

let gender = ['Men\'s', 'Women\'s'];
let material = ['Wool', 'Cotton', 'Polyester', 'Nylon', 'Leather'];
let action = ['Runners', 'Skippers', 'Sprinters', 'Joggers', 'Walkers', 'Trotters', 'Climbers', 'Dashers', 'Pipers', 'Loungers'];
let model = 1;
let shoeBulkData = [];
let reviewBulkData = [];
const NUMBER_OF_SHOES = 100;


gender.forEach(gender => {
  material.forEach(material => {
    action.forEach(action => {
      shoeBulkData.push({ name: `${gender} ${material} ${action}`, model: model });
      model++;
    });
  });
});

let reviews = [`Hands down the best shoes I have ever purchased! Ever!`, `I will never be buying shoes anywher else`, `Worst purchase I have ever made`, `Great!`, `Decent shoes, but customer service completely sucks`, `I like very much`, `These bad boys have lasted me 3 years of everyday use. Fantastic quality, can't recommend them enough!`, `Fine, I guess...`, `Allbirds are way better than this trash!`, `No bueno my friends, I've gone through 3 pairs in the last month due to various manufacturing defects. I really love the idea behind this company but until they get the hiccups figured out I will be purchasing my shoes elsewhere`, `Worst customer service department I've ever dealt with`, `Best shoes one can buy.`];

let randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let shoeID = 1; shoeID <= NUMBER_OF_SHOES; shoeID++) {
  reviews.forEach(review => {
    reviewBulkData.push({ name: faker.name.firstName(), review: review, rating: randomNumberGenerator(1, 5), fit_feedback: randomNumberGenerator(-1, 1), shoe_id: shoeID });
  });
  let rotations = randomNumberGenerator(1, 4);
  for (let i = 0; i < rotations; i++) {
    reviews.push(reviews.shift());
  }
}

Shoe.bulkCreate(shoeBulkData)
.then (() => {
  Review.bulkCreate(reviewBulkData);
})
.catch(err => {
  console.error(err);
});
