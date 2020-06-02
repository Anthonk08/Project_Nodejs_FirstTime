//Usar express
const express = require('express');
//Declaro una variable para ejecutar express
const app = express();

app.get('/saludo', function(req, res){
  res.send(`Hola ${req.query.name}`);
});

app.listen(4000);
