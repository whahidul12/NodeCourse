const http = require('http');
const express = require('express');
const { log } = require('console');

const app = express();

let y = 0;

app.use((reqA, resA, nextA) => {
  console.log("first:", reqA.url, reqA.method);
  console.log('first');
  nextA()
});
app.use((reqA, resA, nextA) => {
  console.log("second:", reqA.url, reqA.method);
  console.log('second');
  nextA()
});
app.use((reqA, resA, nextA) => {
  console.log("third:", reqA.url, reqA.method);
  console.log('third');
});

const server = http.createServer(app);

server.listen(3002, () => {
  console.log('http://localhost:3002');

})