
export class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual,
        this._deducciones = deducciones
    }

    
    get getMontoBrutoAnual(){
        return this._montoBrutoAnual
    }

    get getDeducciones(){
        return this._deducciones
    }

    
    set setMontoBrutoAnual(nuevoMontoBrutoAnual){
        this._montoBrutoAnual = nuevoMontoBrutoAnual
    }

    set setDeducciones(nuevoDeducciones){
        this._deducciones = nuevoDeducciones
    }
    
}

