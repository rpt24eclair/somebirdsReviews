const app = require('./index.js');
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});