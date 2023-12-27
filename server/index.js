/*
Este archivo sirve como punto de entrada principal de la aplicación.
Importa el objeto app desde el archivo app.js.
Define el puerto en el que el servidor estará escuchando (en este caso, 4000).
Inicia el servidor Express llamando al método listen en el objeto app, y muestra un mensaje en la consola cuando el servidor está listo para recibir conexiones.

*/ 

import app from './app.js'
const port = 4000;

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});