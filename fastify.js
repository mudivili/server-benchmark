const fastify = require('fastify')({
});
const data = require('./data');


fastify
  .get('/', function (req, reply) {
    reply
      .send(data)
  })

fastify.listen(3000, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})