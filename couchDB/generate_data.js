const insert = require('./insert.js');
const {promisify} = require('util');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');

let shoePromise = promisify(insert.createShoe);
let reviewPromise = promisify(insert.createReview);

let shoeBulkData = [];
let reviewBulkData = [];
let gender = ['Men\'s', 'Women\'s'];
let material = ['Wool', 'Cotton', 'Polyester', 'Nylon', 'Leather'];
let action = ['Runners', 'Skippers', 'Sprinters', 'Joggers', 'Walkers', 'Trotters', 'Climbers', 'Dashers', 'Pipers', 'Loungers'];
let headlines = ['Best buy!', 'Yesss', 'Nope!', 'Great', 'Bad service', 'I likey', 'Durable as heck!', 'Fine', 'Trash', 'No bueno', 'Worst customer service', 'THE BEST'];
let reviews = [`Hands down the best shoes I have ever purchased! Ever!`, `I will never be buying shoes anywhere else`, `Worst purchase I have ever made`, `Great!`, `Decent shoes, but customer service completely sucks`, `I like very much`, `These bad boys have lasted me 3 years of everyday use. Fantastic quality, can't recommend them enough!`, `Fine, I guess...`, `Allbirds are way better than this trash!`, `No bueno my friends, I've gone through 3 pairs in the last month due to various manufacturing defects. I really love the idea behind this company but until they get the hiccups figured out I will be purchasing my shoes elsewhere`, `Worst customer service department I've ever dealt with`, `Best shoes one can buy.`];

let randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let model = 1;
let count = 0;
let rating = 0;
let fitFeedback = 0;

class Writer {

  constructor(file) {
      this.writer = csvWriter();
      this.writer.pipe(fs.createWriteStream(file, { flags: 'a' }));
  }

  write(obj) {
      // if .write returns false we have to wait until `drain` is emitted
      if(!this.writer.write(obj))
          return new Promise(resolve => this.writer.once('drain', resolve))

      return true;
  }

  end() {
      // Wrap it in a promise if you wish to wait for the callback.
      this.writer.end();
  }

}

(async() => {
  const writer = new Writer('out.csv');

  for(let i = 0; i < 100000; i++) {
    gender.forEach(gender => {
      material.forEach(material => {
        action.forEach(action => {
          curReviews = reviews.slice(0,randomNumberGenerator(1,13));
          curReviews.forEach((review, index) => {
            let tempRating = randomNumberGenerator(1, 5);
            let tempFitFeedback = randomNumberGenerator(-1, 1);
            rating += tempRating;
            fitFeedback += tempFitFeedback;
            count += 1;
            writer.write(({ name: faker.name.firstName(), headline: headlines[index], review: review, rating: tempRating, fit_feedback: tempFitFeedback, shoe_id: model });
          });
          writer.write({ name: `${gender} ${material} ${action}`, model: model, rating_average: (rating / count).toFixed(1), fit_feedback_average: (fitFeedback / count).toFixed(1), review_count: count});
          count = 0;
          rating = 0;
          fitFeedback = 0;
          model++;
        });
      });
    });
    // if(res instanceof Promise) {
    //     // You can remove this if, and leave just: await writer.write...
    //     // but the code will be slower
    //     await res; // This will wait for the stream to emit the drain event
    // }
  }
  writer.end();
  console.log('done');
})();

