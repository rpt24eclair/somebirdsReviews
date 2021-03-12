const fs = require('fs');
const csvWriter = require('csv-write-stream');

const shoes = ["Men's Wool Runners", "Men's Wool Skippers", "Men's Wool Sprinters", "Men's Wool Joggers", "Men's Wool Walkers", "Men's Wool Trotters", "Men's Wool Climbers", "Men's Wool Dashers", "Men's Wool Pipers", "Men's Wool Loungers", "Men's Cotton Runners", "Men's Cotton Skippers", "Men's Cotton Sprinters", "Men's Cotton Joggers", "Men's Cotton Walkers", "Men's Cotton Trotters", "Men's Cotton Climbers", "Men's Cotton Dashers", "Men's Cotton Pipers", "Men's Cotton Loungers", "Men's Polyester Runners", "Men's Polyester Skippers", "Men's Polyester Sprinters", "Men's Polyester Joggers", "Men's Polyester Walkers", "Men's Polyester Trotters", "Men's Polyester Climbers", "Men's Polyester Dashers", "Men's Polyester Pipers", "Men's Polyester Loungers", "Men's Nylon Runners", "Men's Nylon Skippers", "Men's Nylon Sprinters", "Men's Nylon Joggers", "Men's Nylon Walkers", "Men's Nylon Trotters", "Men's Nylon Climbers", "Men's Nylon Dashers", "Men's Nylon Pipers", "Men's Nylon Loungers", "Men's Leather Runners", "Men's Leather Skippers", "Men's Leather Sprinters", "Men's Leather Joggers", "Men's Leather Walkers", "Men's Leather Trotters", "Men's Leather Climbers", "Men's Leather Dashers", "Men's Leather Pipers", "Men's Leather Loungers", "Women's Wool Runners", "Women's Wool Skippers", "Women's Wool Sprinters", "Women's Wool Joggers", "Women's Wool Walkers", "Women's Wool Trotters", "Women's Wool Climbers", "Women's Wool Dashers", "Women's Wool Pipers", "Women's Wool Loungers", "Women's Cotton Runners", "Women's Cotton Skippers", "Women's Cotton Sprinters", "Women's Cotton Joggers", "Women's Cotton Walkers", "Women's Cotton Trotters", "Women's Cotton Climbers", "Women's Cotton Dashers", "Women's Cotton Pipers", "Women's Cotton Loungers", "Women's Polyester Runners", "Women's Polyester Skippers", "Women's Polyester Sprinters", "Women's Polyester Joggers", "Women's Polyester Walkers", "Women's Polyester Trotters", "Women's Polyester Climbers", "Women's Polyester Dashers", "Women's Polyester Pipers", "Women's Polyester Loungers", "Women's Nylon Runners", "Women's Nylon Skippers", "Women's Nylon Sprinters", "Women's Nylon Joggers", "Women's Nylon Walkers", "Women's Nylon Trotters", "Women's Nylon Climbers", "Women's Nylon Dashers", "Women's Nylon Pipers", "Women's Nylon Loungers", "Women's Leather Runners", "Women's Leather Skippers", "Women's Leather Sprinters", "Women's Leather Joggers", "Women's Leather Walkers", "Women's Leather Trotters", "Women's Leather Climbers", "Women's Leather Dashers", "Women's Leather Pipers", "Women's Leather Loungers"];

const randomIntGenerator = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const randomNumberGenerator = (min, max) => {
  return Math.random() * (max - min) + min;
}

let shoesIndex = 0;

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

const generateShoes = async() => {
  const writer = new Writer('shoes.csv');

  let index = randomIntGenerator(0, 13);
  let shoesIndex = 0;
  let ratingAverage = randomNumberGenerator(1, 5).toFixed(1);
  let fitAverage = randomNumberGenerator(-1, 1).toFixed(1);

  for(let i = 1; i <= 10000000; i++) {
    if (i % 100000 === 0) {
      index = randomIntGenerator(0, 13);
      ratingAverage = randomNumberGenerator(1, 5).toFixed(1);
      fitAverage = randomNumberGenerator(-1, 1).toFixed(1);
      console.log(i);
    };

    let content = {
      shoe_name: shoes[shoesIndex],
      model: i,
      rating_average: ratingAverage,
      fit_feedback_average : fitAverage,
    };

    const res = writer.write(content);

    if (shoesIndex > 98) {
      shoesIndex = 0;
    } else {
      shoesIndex++;
    };

    if (res instanceof Promise) {
        // You can remove this if, and leave just: await writer.write...
        // but the code will be slower
        await res; // This will wait for the stream to emit the drain event
    };
  };

  writer.end();
  console.log('shoes created');
};

module.exports = {
  generateShoes: generateShoes
};
