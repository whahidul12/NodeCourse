function detectType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

const requestHandler = (req, res) => {
  console.log('url:', req.url, 'method:', req.method);

  if (req.url === '/favicon.ico' && req.method === 'GET') {
    res.statusCode = 204;
    return res.end();
  } else if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html lang="en">
        <head>
            <title>Home</title>
        </head>
        <body>
            <h1>Welcome to home page</h1>
            <a href="/calculator"><button>Calculator</button></a>
        </body>
      </html>
      `)
    return res.end();
  } else if (req.url === '/calculator' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html lang="en">
        <head>
            <title>Calculator</title>
        </head>
        <body>
            <form action="/sum" method="POST">
                <input type="number" id="firstNum" name="firstNum" /> +
                <input type="number" id="secondNum" name="secondNum" /> +
                <input type="number" id="thirdNum" name="thirdNum" />
                <button type="submit">=</button>
            </form>
        </body>
      </html>
      `)
    return res.end();
  } else if (req.url === '/sum' && req.method === 'POST') {
    const fullChunk = [];
    req.on('data', (chunk) => {
      fullChunk.push(chunk);
    });
    let sum = 0
    req.on('end', () => {
      const stringChunk = Buffer.concat(fullChunk).toString();
      const rawData = new URLSearchParams(stringChunk);
      const rawObj = {}
      for (const [key, value] of rawData) {
        rawObj[key] = value
      }
      for (const key in rawObj) {
        sum = sum + Number(rawObj[key]);
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(`
        <html lang="en">
          <head>
              <title>Calculator</title>
          </head>
          <body>
              <h1>hi there ${sum}</h1>
          </body>
        </html>
        `)
      return res.end();
    })
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html lang="en">
        <head>
            <title>Calculator</title>
        </head>
        <body>
            <h1>404 not found</h1>
        </body>
      </html>
      `)
    return res.end();
  }
}

module.exports = requestHandler;
