const http = require('http')

const server = http.createServer((req, res) => {
  console.log('URL:', req.url);
  console.log('Method:', req.method);


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
                  <label for="name">
                      <input type="text" id="name" name="name" />
                  </label>
                  <label for="gender"
                      >Gender:
                      <input type="radio" id="male" name="gender101" value="male101" />
                      <label for="male"> Male</label>
                      <input type="radio" id="female" name="gender101" value="female101" />
                      <label for="female"> Female</label>
                  </label>
                  <button type="submit">Submit</button>
              </form>
          </body>
      </html>
      `)
    return res.end();
  } else if (req.url === '/submit-form' && req.method === 'POST') {
    res.statusCode = 302;
    res.setHeader('location', '/success')
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
          <h1>your appication is successful</h1>
          <h3>click here to go to the home page</h3>
          <a href="/"><button type="button">HOME</button></a>
      </body>
    </html>
      `)
    return res.end();
  } else {
    console.log('something went worng--01');

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
          <h1>404 not found!!!</h1>
      </body>
    </html>
      `)
    console.log('something went worng--02');
    return res.end();
  }
})

server.listen(3000, () => {
  console.log(`Running....'http://localhost:3000'`);

})