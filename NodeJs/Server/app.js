const http = require('http');

const routes = require('./routes');

console.log(routes.someText);


const server = http.createServer(app);
// const server = http.createServer(routes.handler);

server.listen(3000);

app.listen(3000);