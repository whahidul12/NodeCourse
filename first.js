const http = require('http')

const server = http.createServer((req, res) => {
  console.log(">>>", req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text / html');
    res.write('<html>')
    res.write('<head><title>whahidul islam</title></head>')
    res.write('<body>')

    res.write('<form action="/submit-form" method="POST"')

    res.write('<lable for="name">Name: </lable>')
    res.write('<input type="text" id="name" name="name" placeholder="input your name"')

    res.write('<lable for="gender">Gender: </lable>')

    res.write('<input type="radio" id="male" name="gender" value="male"')
    res.write('<lable for="male">Male</lable>')

    res.write('<input type="radio" id ="female" name="gender" value="female"')
    res.write('<lable for="female">Female</lable>')

    res.write('<button type="submit">Submit</button>')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>')
    res.end()
  } else if (req.url === "/submit-form" && req.method === "POST") {
    res.statusCode = 302;
    res.setHeader('location', '/done')
    res.end()
  } else if (req.url === "/done") {
    res.setHeader('Content-Type', 'text / html');
    res.write('<html>')
    res.write('<head><title>whahidul islam</title></head>')
    res.write(`<body>`)
    res.write(`<h1>Form submited succesfuly</h1>`)
    res.write(`<h1>data is</h1>`)
    res.write(`</>`)
    res.write('</html>')
    res.end()
  }


});
const PORT = 3000
server.listen(PORT, () => {
  console.log(`Running on 'http://localhost:${PORT}'`);
})