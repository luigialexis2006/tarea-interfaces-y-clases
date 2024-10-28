/*5. Crear una clase Electrodoméstico con subclases Televisor, Nevera y Lavadora. Cada electrodoméstico tiene
propiedades como precio y color. Crear algunos objetos y probar. */

class Electrodoméstico {
    precio: number;
    color: string;

    constructor(precio: number, color: string){
        this.precio = precio;
        this.color = color;
    }
}

class Televisor extends Electrodoméstico {
    constructor (precio: number, color: string){
        super(precio, color)
    }
}

class Nevera extends Electrodoméstico {
    constructor (precio: number, color: string){
        super(precio, color)
    }
}

class Lavadora extends Electrodoméstico {
    constructor (precio: number, color: string){
        super(precio, color)
    }
}