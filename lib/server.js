const path = require('path')
const url = require('url')
const http = require('http')
const fs = require('fs')
const PORT = process.env.PORT || 8080

http.createServer((req, res) => {

  let uri, filename;

  uri = url.parse(req.url).pathname;
  filename = path.join(path.resolve(__dirname, '../dist/'), uri);

  if (!fs.existsSync(filename)) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not found');
    res.end();
    return;
  }

  if (fs.statSync(filename).isDirectory()) {
    filename += '/index.html'
  }

  fs.readFile(filename, 'binary', (err, file) => {
    if(err) {        
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.write(`${err}\n`);
      res.end();
      return;
    }

    res.writeHead(200);
    res.write(file, 'binary');
    res.end();
  });
}).listen(PORT, false, () => {
  console.log('Server running on ' + PORT + '...')
});
