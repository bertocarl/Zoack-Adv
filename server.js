const http = require('http');
const app = require('./app');

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });
  
  app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });
  
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });
  
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);