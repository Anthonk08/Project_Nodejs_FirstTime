//Libreria express
const express = require('express');
const app = express();

//Motor de vista ejs
app.set('view engine','ejs');

/*
Los archivos estaticos no pasan por el servidor
directamente, por lo cual no es necesario actualizar
el servidor cada vez que se haga un cambio. Los archivos
estaticos son leidos directamente del disco duro y
enviados al cliente
*/
app.use('/assets', express.static('assets',{
  //etag en false desactiva el uso del ETAG en el curl
  etag: false,
  //maxAge aqui ponemos el tiempo que tendra esa copia en
  //el cache para borrarse y actualizar por la nueva version
  maxAge: '5h'
}));

app.get('/', function(req, res){
  res.render('index');
});

//Llamar la funcion en un servidor local
app.listen(3000);
