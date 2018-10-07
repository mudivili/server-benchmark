const micro = require('micro')
const data = require('./data');

const server = micro(async (req, res) => {
  return data;
})

server.listen(3000)