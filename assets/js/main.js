
import { Cliente } from './cliente.js'
import { Impuesto } from './impuesto.js'

const clienteArmandoParedes = new Cliente('Armando Paredes')
const impuestoArmandoParedes = new Impuesto(600, 100)



console.log(clienteArmandoParedes)
console.log(impuestoArmandoParedes)

clienteArmandoParedes.calcularImpuesto(impuestoArmandoParedes);

console.log(`Los impuestos para ${clienteArmandoParedes.getNombre} son: $ ${clienteArmandoParedes.getImpuesto}`);