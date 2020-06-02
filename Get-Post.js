//Usar express
const express = require('express');
//Utilizaremos la libreria recien installada en la consola con npm install body-parser
//Luego importaremos la librería.
const bodyParser = require('body-parser');

//Declaro una variable para ejecutar express
const app = express();

//Le pedimos al bodyParse que analice una peticion, utilizando el objeto app de express
app.use( bodyParser.urlencoded({extented: true}));

app.get('/saludo', function(req, res){
  res.send(`Hola ${req.query.name}`);
});

app.post('/', function(req, res){
  res.send(`Hola ${req.body.name}`);
});

app.listen(4000);
