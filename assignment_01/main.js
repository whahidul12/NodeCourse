const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('>>>', req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text / html');
    res.write('<html>')
    res.write('<head><title>whahidul islam</title></head>')
    res.write('<body>')
    res.write('<h1>hello world</h1>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  } else if (req.url === 'books') {
    res.setHeader('Content-Type', 'text / html');
    res.write('<html>')
    res.write('<head><title>whahidul islam</title></head>')
    res.write('<body>')
    res.write('<h1>books</h1>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  } else {
    res.setHeader('Content-Type', 'text / html');
    res.write('<html>')
    res.write('<head><title>whahidul islam</title></head>')
    res.write('<body>')
    res.write('<h1>others</h1>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }
});

server.listen(PORT, () => {
  console.log(`Running... at 'http://localhost:${PORT}'`);
})