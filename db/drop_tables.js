const { Shoe, Review } = require('./index.js');

Review.drop()
.then(() => {
  Shoe.drop();
})
.catch(error => {
  console.error(error);
});