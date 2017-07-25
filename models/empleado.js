'use strict'

const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


var Schema= mongoose.Schema;

var EmpleadoSchema= Schema({
  id:String,
  nombre:String,
  apellido:String,
  fechaNacimiento:String,
  email: { type: String, unique: true}
});
EmpleadoSchema.plugin(uniqueValidator,{ message: 'Error. Esa cuenta de correo ya esta en uso, intenta con otra!' });

module.exports = mongoose.model('Empleado',EmpleadoSchema);
