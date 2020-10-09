const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

/* ************************************
creando puerto de heroku o uno por defecto
************************************* */
const port = process.env.PORT || 3000;

/* ************************************
EJEMPLO PARA PINTAR HTML EN NAVEGADOR
************************************* */
app.use(express.static(__dirname + '/public'));

// Express HBS para renderizar por defecto con hbs y usar variables desde aqui
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales')


/* ************************************
PRIMER EJEMPLO DE USO HBS RENDERIZADO
************************************* */
app.get('/', (request, response) => {

  response.render('home', {
    saludo: 'hola richard hello'
  })
})
app.get('/about', (request, response) => {

  response.render('about')
})

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});