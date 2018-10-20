"use strict";
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'ALBERTO',
        autor: 'ALBERTO PADRON',
        curso: 'WebServer - Curso Node'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        autor: 'Alberto Padrón',
        curso: 'WebServer - Curso Node'
    });
});
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
//# sourceMappingURL=server.js.map