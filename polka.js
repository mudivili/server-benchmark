const polka = require('polka');
const data = require('./data');

polka()
  .get('/', (req, res) => {
    res.end(JSON.stringify(data));
  })
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3000`);
  });