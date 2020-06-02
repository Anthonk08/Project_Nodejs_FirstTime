//Como hacer un servidor
const http = require('http');

//Funcion que devuelve un mensaje
function responderPeticion(request, response){
  response.end('Mi nombre es Anthony Tineo');
}

//Peticion que hara el server tomando la informacion de la funcion
let server = http.createServer(responderPeticion);

//Puerto donde se comunicara el server
server.listen(4000);
