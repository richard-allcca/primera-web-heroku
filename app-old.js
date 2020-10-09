
const http = require('http');

const proxy = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'application/json' });

  let salida = {
    nombre: 'richard',
    edad: 34,
    url: req.url
  }

  res.write(JSON.stringify(salida));
  res.end();

})
// const proxy = http.createServer((req, res) => {

//   res.writeHead(200, { 'Content-Type': 'application/json' });

//   res.write(JSON.stringify('hola'))
//   res.end();

// })
// proxy.listen(8080);

// console.log('escuchando el puerto 8080');