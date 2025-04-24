const http = require('http');
const requestHandler = require('./main')
const server = http.createServer(requestHandler)

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`running on 'http;//localhost:${PORT}'`);
}
)