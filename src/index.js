require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const path = require("path");

const app = express();


//Funciones rutas (Middleware)
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas servidor (Routes)
app.use(require('./routes/index'));

// Contenido estático (Static content)
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', express.Router());

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
})
