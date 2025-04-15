const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('>>>', req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text / html');
    res.write('<html>')
    res.write('<head><title>whahidul islam</title></head>')
    res.write('<body>')

    res.write('<nav>')

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
  }

});

server.listen(PORT, () => {
  console.log(`Running... at 'http://localhost:${PORT}'`);

})