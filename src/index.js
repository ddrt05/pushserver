require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const path = require("path");

const app = express();

const port = process.env.PORT || 3000

//Funciones rutas (Middleware)
//app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Rutas servidor (Routes)
//app.use(require('./routes/index'));

// Contenido estático (Static content)
//app.use(express.static(path.join(__dirname, 'public')))

app.get("/",(req,res)=>){
    res.status(200).send(msg:"HOlaaa ..");
});

app.listen(port, function () {
    console.log('Server listening on port ${port}!');
})
