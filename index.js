'use strict'
var mongoose= require('mongoose');
var app= require('./app');
var puerto = process.env.PORT||3000;

mongoose.connect('mongodb://localhost:27017/DBappEmpleados',(err,res)=>{

  if (err) {
    throw err;
  }else {
    console.log("Conexion a Mongodb correcta!");
    app.listen(puerto,function () {
      console.log('Api arriba! puerto: '+puerto);
    });
  }
});
