const express = require('express');

const app = express();

app.get("/", (reqA, resA, nextA) => {
  console.log("first:", reqA.url, reqA.method);
  console.log('first');
  resA.send("<h1>hi there1</h1>");
  nextA()
});
app.use("/page-2", (reqA, resA, nextA) => {
  console.log("second:", reqA.url, reqA.method);
  console.log('second');
  resA.send("<h1>hi there2</h1>");
  console.log("page 2");
});
app.use("/page-3", (reqA, resA, nextA) => {
  console.log("third:", reqA.url, reqA.method);
  console.log('third');
  resA.send("<h1>hi there3</h1>");
  console.log("page 3");
});

app.listen(3002, () => {
  console.log('http://localhost:3002');
})