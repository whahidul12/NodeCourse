const http = require('http');
const test = require('./test')

const server = http.createServer(test)

server.listen(3002, () => {
  console.log('http://localhost:3002');

})