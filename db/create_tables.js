const { Shoe, Review } = require('./index.js');

async function synchronizeModels() {
  try {
    await Shoe.sync();
    await Review.sync();
  } catch (error) {
    console.error(error);
  }
}

synchronizeModels();