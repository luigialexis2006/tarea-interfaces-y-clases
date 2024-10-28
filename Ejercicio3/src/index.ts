/*3. Crear una clase Vehículo con subclases Coche, Barco y Avión. Cada subclase implementa su propio método
desplazarse (). Crear objetos de las subclases y probar sus métodos.*/

class Vehículo {
    desplazarse(){
        console.log("el vehiculo se esta desplazando")
    }
}

class Coche extends Vehículo{
    desplazarse(){
        console.log("el coche se esta desplazando")
    }
}

class Barco extends Vehículo{
    desplazarse(){
        console.log("el barco se esta desplazando")
    }
}

class Avión extends Vehículo{
    desplazarse(){
        console.log("el Avion se esta desplazando")
    }
}