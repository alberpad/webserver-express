"use strict";
const http = require('http');
const PORT = 8080;
http
    .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Alberto',
        edad: 42,
        url: req.url
    };
    res.write(JSON.stringify(salida));
    res.end();
})
    .listen(PORT);
console.log(`Escuchando en el puerto ${PORT}`);
//# sourceMappingURL=app-old.js.map