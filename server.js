const express = require('express');
const app = express();

const hbs = require('hbs');
/*  PASO 6 usar HELPERS importados 
son funciones que usamos como variables q estan en otra carpeta
 puedes usar como parametro alguna variable definida en response.render */
require('./hbs/helpers')

/* ************************************
indicamos puerto de heroku o uno por defecto
************************************* */
const port = process.env.PORT || 3000;

/* ************************************
PASO 2 EJEMPLO MIDDLEWARE con esto hbs 
podra usar todo los archivos de public como el css
************************************* */
app.use(express.static(__dirname + '/public'));

// PASO 3 USAR VIEW ENGINE COMO RENDERIZADOR
app.set('view engine', 'hbs');

// PASO 5 con esto le decimos que tiene un direccitorio (--dirnme +) donde estan todas mis parciales
hbs.registerPartials(__dirname + '/views/parciales')

/* ************************************
NOTA  si quieres que ser vean los cambios con nodemon usa 
nodemon server .e js,hbs,css,html
************************************* */

/* ************************************
PASO 4 USAR app.get CON UN response.render para indicar el nombre del archivo a renderizar
TAMBIEN dentro del render podemos crear VARIABLES en un OBJETO para contenido dinamico 
************************************* */
app.get('/', (request, response) => {

  response.render('home', {
    saludo: 'hola richard'
  })
})
app.get('/about', (request, response) => {

  response.render('about')
})

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

