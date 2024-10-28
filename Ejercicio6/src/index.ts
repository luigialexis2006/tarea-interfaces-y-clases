/*6. Crear una clase Hotel con propiedades como nombre y ubicación. Crear clase Habitación con número de
habitación, precio y estado. Agregar métodos para reservar y liberar habitación. Probar con algunos hoteles e
interacciones. */

class Hotel {
    nombre: string;
    ubicacion: string;

    constructor(nombre: string, ubicacion: string) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }
}

class Habitacion {
    numero: number;
    precio: number;
    estado: string;

    constructor(numero: number, precio: number, estado: string) {
        this.numero = numero;
        this.precio = precio;
        this.estado = estado;
    }

    reservar() {
        this.estado = "reservada";
        console.log(`Habitación ${this.numero} ha sido reservada.`);
    }

    liberar() {
        this.estado = "disponible";
        console.log(`Habitación ${this.numero} ha sido liberada.`);
    }
}

/*como usarlo*/
const hotel1 = new Hotel("Hotel Paraíso", "Playa");
const habitacion1 = new Habitacion(101, 150, "disponible");

habitacion1.reservar();
habitacion1.liberar();
