const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//Si se sube a Heroku, obtener el port con process.env
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req: any, res: any) => {
  //Express y hbs renderizan por defecto el contenido de la carpeta views
  res.render('home', {
    nombre: 'ALBERTO',
    autor: 'ALBERTO PADRON',
    curso: 'WebServer - Curso Node'
  });
});

app.get('/about', (req: any, res: any) => {
  //Express y hbs renderizan por defecto el contenido de la carpeta views
  res.render('about', {
    autor: 'Alberto Padrón',
    curso: 'WebServer - Curso Node'
  });
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
