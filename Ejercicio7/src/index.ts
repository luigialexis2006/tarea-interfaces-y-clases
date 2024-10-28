/*7. Crear una clase Película con propiedades como título, duración y director. Crear clase CatalogoPeliculas para
almacenar películas en una lista. Agregar búsqueda por título y filtrado por director. Probar con un catálogo de
películas. */

class Pelicula {
    titulo: string;
    duracion: number;
    director: string;

    constructor(titulo: string, duracion: number, director: string) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
    }
}

class CatalogoPeliculas {
    peliculas: Pelicula[] = [];

    agregarPelicula(pelicula: Pelicula) {
        this.peliculas.push(pelicula);
    }

    buscarPorTitulo(titulo: string) {
        return this.peliculas.filter(pelicula => pelicula.titulo.includes(titulo));
    }

    filtrarPorDirector(director: string) {
        return this.peliculas.filter(pelicula => pelicula.director === director);
    }
}

/*como usarlos*/
const catalogo = new CatalogoPeliculas();
const pelicula1 = new Pelicula("titanic", 148, "sabra judas");
const pelicula2 = new Pelicula("terminator", 169, "arnold");

catalogo.agregarPelicula(pelicula1);
catalogo.agregarPelicula(pelicula2);

console.log(catalogo.buscarPorTitulo("titanic"));
console.log(catalogo.filtrarPorDirector("sabra judas"));
