const app = require('./index.js');
// const PORT = 3003;
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});