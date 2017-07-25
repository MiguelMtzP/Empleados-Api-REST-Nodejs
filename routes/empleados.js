'use strict'

const express = require('express');
var EmpleadoController =require ('../controllers/empleados');
var api= express.Router();

api.get('/hola',EmpleadoController.saludo);
api.get('/empleados',EmpleadoController.getEmpleados);
api.post('/empleado',EmpleadoController.saveEmpleado);
api.get('/empleado/:id',EmpleadoController.getEmpleado);
api.put('/empleado/:id',EmpleadoController.updateEmpleado);
api.delete('/empleado/:id',EmpleadoController.deleteEmpleado);

module.exports = api;
