"use strict";

var _cliente = require("./cliente.js");
var _impuesto = require("./impuesto.js");
var clienteArmandoParedes = new _cliente.Cliente('Armando Paredes');
var impuestoArmandoParedes = new _impuesto.Impuesto(40000, 10000);
console.log(clienteArmandoParedes);
console.log(impuestoArmandoParedes);
clienteArmandoParedes.calcularImpuesto(impuestoArmandoParedes);
console.log("Los impuestos para ".concat(clienteArmandoParedes.getNombre, " son: $ ").concat(clienteArmandoParedes.getImpuesto));