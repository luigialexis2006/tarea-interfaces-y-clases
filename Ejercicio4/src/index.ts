/*4. Crear una clase FiguraGeometrica y subclases Triángulo, Círculo y Cuadrado. Implementar el método area() en
cada subclase. Crear objetos y calcular sus áreas. */

abstract class FiguraGeometrica {
    abstract area(): number;
}

class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    area() {
        return (this.base * this.altura) / 2;
    }
}

class Circulo extends FiguraGeometrica {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }
}

class Cuadrado extends FiguraGeometrica {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    area() {
        return this.lado * this.lado;
    }
}

/*COMO USAR JAJAJA */
const triangulo = new Triangulo(5, 10);
console.log(`Área del triángulo: ${triangulo.area()}`);

const circulo = new Circulo(7);
console.log(`Área del círculo: ${circulo.area()}`);

const cuadrado = new Cuadrado(4);
console.log(`Área del cuadrado: ${cuadrado.area()}`);

