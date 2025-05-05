const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(`first middleware ${req.url}, ${req.method}`);
  next();
})
app.use((req, res, next) => {
  console.log(`second middleware ${req.url}, ${req.method}`);
  next();
})
app.get("/", (req, res, next) => {
  console.log(`third middleware ${req.url}, ${req.method}`);
  res.send(`
    welcome to front page "/"
    <a href="/submit-form"><button type="submit">Form</button></a>
    `)
})
app.get("/submit-form", (req, res, next) => {
  console.log(`third middleware ${req.url}, ${req.method}`);
  res.send(`
      <form action="/submit-form" method="POST">
        <input type="name" name="name" /> 
        <input type="email" name="email" />
        <input type="submit"></input>
        </form>
        <a href="/"><button>home</button></a>
    `)
})
app.post("/submit-form", (req, res, next) => {
  console.log(`third middleware ${req.url}, ${req.method}`);
  res.send(`
      thanks
      <a href="/"><button>home</button></a>
    `)
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running on "http://localhost:${PORT}`);
})