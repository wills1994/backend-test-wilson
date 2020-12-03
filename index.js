const express = require('express');
const app = express();
const slash = require('express-slash');
const morgan = require('morgan'); //Un logger de solicitudes HTTP para Node.js.
const path = require('path');
const rfs = require('rotating-file-stream');
const helmet = require('helmet');//protegidos al establecer multiples encabezados http dentro de la aplicación
const cors = require('cors');
const { config } = require('./config/index');

const productosApi = require('./routes/productos.js');
const { logErrors, 
    errorHandler,wrapErrors } = require('./utils/middleware/errorHandlers.js');
const notFoundHandler = require('./utils/middleware/notFoundHandler.js');

// Permitir solicitudes cruzadas
app.use(cors());
app.use(helmet()); //Helmet lo ayuda a proteger sus aplicaciones Express configurando varios encabezados HTTP.


//por defecto express necesita parcear estos datos JSON
app.use(express.json());
productosApi(app);


// Catch 404
app.use(notFoundHandler);

//Errors middleware
app.use(logErrors);
app.use(errorHandler);
app.use(wrapErrors);


// crear una secuencia de escritura rotativa
const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
})

//Logger
app.use(morgan('combined', { stream: accessLogStream }));

// añadir el middleware de slash
//Convertir rutas de barra invertida de Windows en rutas de barra inclinada: foo\\bar ➔ foo/bar
app.use(slash());

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});
  