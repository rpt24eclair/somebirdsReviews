const fs = require('fs');
const csvWriter = require('csv-write-stream');

let names = ['Scarlett', 'Emma', 'Tiffany', 'Florentina', 'Jake', 'Ian', 'Jada', 'Jim', 'Estevan', 'Alina', 'Teresa', 'Alejandro'];

let headlines = ['Best buy!', 'Yesss', 'Nope!', 'Great', 'Bad service', 'I likey', 'Durable as heck!', 'Fine', 'Trash', 'No bueno', 'Worst customer service', 'THE BEST'];

let reviews = [`Hands down the best shoes I have ever purchased! Ever!`, `I will never be buying shoes anywhere else`, `Worst purchase I have ever made`, `Great!`, `Decent shoes but customer service completely sucks`, `I like very much`, `These bad boys have lasted me 3 years of everyday use. Fantastic qualitycan't recommend them enough!`, `Fine I guess...`, `Allbirds are way better than this trash!`, `No bueno my friends I've gone through 3 pairs in the last month due to various manufacturing defects. I really love the idea behind this company but until they get the hiccups figured out I will be purchasing my shoes elsewhere`, `Worst customer service department I've ever dealt with`, `Best shoes one can buy.`];

let ratings = [5, 1, 1, 5, 3, 4, 5, 3, 1, 2, 1, 5];

let fit_feedbacks = [1, 0, -1, 1, 1, -1, 1, 1, 0, 0, 1, -1];

const randomIntGenerator = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

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
};

const generateReviews = async() => {
  const writer = new Writer('reviews.csv');

  let index = randomIntGenerator(0, 13);

  for(let i = 1; i <= 100000; i++) {
    if (i % 1000 === 0) {
      index = randomIntGenerator(0, 13);
      console.log(i);
    };

    for(let j = 0; j < index; j++) {
      let content = {
        author_name: names[j],
        headline: headlines[j],
        review: reviews[j],
        rating: ratings[j],
        fit_feedback: fit_feedbacks[j],
        shoe_id: i
      };
      const res = writer.write(content);
      if (res instanceof Promise) {
          // You can remove this if, and leave just: await writer.write...
          // but the code will be slower
          await res; // This will wait for the stream to emit the drain event
      };
    };
  }
  writer.end();
  console.log('reviews created');
};

// generateReviews();

module.exports = {
  generateReviews: generateReviews
};