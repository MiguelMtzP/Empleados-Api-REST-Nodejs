'use strict'

var Empleado = require('../models/empleado');

function saludo(req,res) {
  res.status(200).send({msj: "Bienvenido al API de empleados"});
}

function getEmpleado(req,res) {
  var idEmpleado= req.params.id;

  Empleado.findById(idEmpleado,(err,founded)=>{
    if (err) {
      res.status(500).send({msj:"error en el servidor"})
    }else {
      res.status(200).send(founded);
    }
  });
}

function getEmpleados(req,res) {
  Empleado.find({},(err,empleados)=>{
    if (err) {
      res.status(500).send({msj:"Error al buscar en la BD"});
    }else {
      res.status(200).send(empleados);
    }
  });
}

function saveEmpleado(req,res) {
  let empleado= new Empleado();
  var parametros= req.body;
  empleado.nombre=parametros.nombre;
  empleado.apellido=parametros.apellido;
  empleado.fechaNacimiento=parametros.fechaNacimiento;
  empleado.email=parametros.email;
  empleado.save((err,saved)=>{
    if (err) {
      console.log(err);
      res.status(406).send(err);
    }
    res.status(200).send(saved);
  });
}

function updateEmpleado(req,res) {
  var idEmpleado= req.params.id;
  let update =req.body;

  Empleado.findByIdAndUpdate(idEmpleado,update,(err,updated)=>{
    if (err) {
      console.log(err);
      res.status(406).send(err);
    }else {
      res.status(200).send({actualizado:updated});
    }
  });
}

function deleteEmpleado(req,res) {
  var idEmpleado= req.params.id;
  Empleado.findById(idEmpleado,(err,empleado)=>{
    if (err) {
      res.status(500).send({msj:"error en el servidor"});
    }else {
      if (!empleado) {
        res.status(404).send({msj:"no se encontro el empleado"});
      }else {
        empleado.remove((err,removed)=>{
          if (err) {
            res.status(500).send({msj:"error en el servidor"});
          }else {
            res.status(200).send({msj:"Eliminado correctamente"});
          }
        })
      }
    }
  })
}

module.exports = {
  saludo,
  saveEmpleado,
  getEmpleados,
  getEmpleado,
  updateEmpleado,
  deleteEmpleado
};
