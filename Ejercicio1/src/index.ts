/*1. Crear una clase Persona con propiedades como nombre, edad, documento identidad y métodos como caminar(),
hablar(), comer(). Crear algunos objetos Persona e interactuar con sus propiedades y métodos.*/

class Persona  {
    nombre: string;
    edad: number;
    documento: number;

    constructor(nombre: string, edad: number, documento: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.documento = documento;
    }

    caminar() {
        console.log(`${this.nombre} esta caminando`);
    }

    hablar() {
        console.log(`${this.nombre} esta hablando`);
    }

    comer(){
        console.log(`${this.nombre} esta comiendo`);
    }
}

const Valery = new Persona ("Valery", 15, 1094921332);

Valery.caminar();
