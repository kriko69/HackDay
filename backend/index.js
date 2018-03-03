
const express = require('express');
const morgan = require('morgan');

const app = express();

//permitir que cualquiera tenga acceso al backend
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS");
    next();
  });

app.use(morgan('dev'));

app.set('appname','Backend applicacion horarios'); //nombre de la aplicacion


const routes = require('./routes.js');

app.use(routes);

app.listen(5000,()=>{
    console.log('backend '+app.get('appname')+' funcionando');
    
});