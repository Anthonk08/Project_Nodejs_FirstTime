//Como hacer un servidor
/*
const http = require('http');

//Funcion que devuelve un mensaje
function responderPeticion(request, response){
  response.end('Mi nombre es Anthony Tineo');
}

//Peticion que hara el server tomando la informacion de la funcion
let server = http.createServer(responderPeticion);

//Puerto donde se comunicara el server
server.listen(4000);
*/

//Usar express
const express = require('express');
//Declaro una variable para ejecutar express
const app = express();

app.get('/', function(req, res){
  res.send('Hola mundo. Soy Anthony Tineo');
});

app.listen(4000);
