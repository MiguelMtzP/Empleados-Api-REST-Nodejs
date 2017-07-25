'use strict'

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var api= require('./routes/empleados');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//middleware para permitir metodos
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
  res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.header('Allow','GET, POST, PUT, DELETE')
  next();
});

app.use('/',api);


module.exports = app;
