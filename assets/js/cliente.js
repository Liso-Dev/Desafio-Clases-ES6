
export class Cliente {
    constructor(nombre) {
        this._nombre = nombre
    }


    get getNombre() {
        return this._nombre
    }

    get getImpuesto() {
        return this._impuesto
    }


    set setNombre(nuevoNombre) {
        this._nombre = nuevoNombre
    }



    calcularImpuesto(impuesto) {
        this._impuesto = (impuesto.getMontoBrutoAnual - impuesto.getDeducciones) * 0.21;
    }

}