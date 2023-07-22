const app = require('./app.js');
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

app.use(cors());


server.listen(7000, () => {
  console.log('*** servidor activo ***');
});



