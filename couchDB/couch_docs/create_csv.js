// const {promisify} = require('util');

const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const count = 0;

const data = require('../one_hundred.js');

let shoes = data.shoeBulkData;
let reviews = data.reviewBulkData;

console.log('review test', reviews[100]);
console.log('shoe test', shoes[10]);

const writeShoes = () => {
  writer.pipe(fs.createWriteStream('shoes.csv'));
  for (let j = 0; j < 100000; j++) {
    for (let i = 0; i < 100; i++) {
      writer.write(shoes[i]);
    }
    console.log(j);
  }
  console.log('shoes done');
  writer.end();
};

const writeReviews = () => {
  writer.pipe(fs.createWriteStream('reviews.csv'));
  let max = reviews.length;
  for (let j = 0; j < 10000; j++) {
    for (let i = 0; i < max; i++) {
      writer.write(reviews[i]);
    }
  }
  writer.end();
  console.log('reviews done');
};

// writeShoes();
writeReviews();
