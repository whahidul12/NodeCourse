function detectType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
const fs = require('fs');
const http = require('http');
const { json } = require('stream/consumers');

const server = http.createServer((req, res) => {
  console.log('url:', req.url, 'method:', req.method);

  // Ignore /favicon.ico to prevent the else block from running unnecessarily
  if (req.url === '/favicon.ico') {
    res.statusCode = 204;
    return res.end();
  }

  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Home</title>
        </head>
        <body>
          <form action="/submit-form" method="POST">
            <label for="name">Name:
              <input type="text" id="name" name="name" />
            </label><br />
            <label>Gender:<br />
              <input type="radio" id="male" name="gender101" value="male101" />
              <label for="male">Male</label>
              <input type="radio" id="female" name="gender101" value="female101" />
              <label for="female">Female</label>
            </label><br />
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  } else if (req.url === '/submit-form' && req.method === 'POST') {
    const fullChunk = [];
    req.on('data', (chunk) => {
      console.log('type:', detectType(chunk), 'chunk:', chunk);
      fullChunk.push(chunk);
    })
    req.on('end', () => {
      const persedChunk = Buffer.concat(fullChunk).toString();
      console.log('type:', detectType(persedChunk), 'persedChunk:', persedChunk);
      const rawData = new URLSearchParams(persedChunk);
      console.log('type:', detectType(rawData), 'rawData:', rawData);

      rawObj = {};

      for (const [key, value] of rawData.entries()) {
        rawObj[key] = value
      }
      console.log('type:', detectType(rawObj), 'rawObj:', rawObj);
      const rawObjString = JSON.stringify(rawObj)
      fs.writeFileSync('dataBase.txt', rawObjString)
      console.log('type:', detectType(rawObjString), 'rawObjString:', rawObjString);
    })
    res.statusCode = 302;
    res.setHeader('Location', '/success');
    return res.end();
  } else if (req.url === '/success' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Success</title>
        </head>
        <body>
          <h1>Your application was successful</h1>
          <h3>Click below to go to the home page</h3>
          <a href="/"><button type="button">HOME</button></a>
        </body>
      </html>
    `);
    return res.end();
  } else {
    console.log('something went wrong--01');

    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>404</title>
        </head>
        <body>
          <h1>404 - Not Found</h1>
        </body>
      </html>
    `);

    console.log('something went wrong--02');
    return res.end();
  }
});

server.listen(3001, () => {
  console.log(`Server running at http://localhost:3000`);
});
