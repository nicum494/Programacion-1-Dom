
    // const libro={
    //     titulo:"Las Aventuras de lucho y sus familiares",
    //     autor:"Gabriel Montecino",
    //     año:2026,
    //     genero:"ficcion",
    //     disponible:true,
    //     mostrarDetalles() {
    //         return`El titulo es ${this.titulo}
    //             \nEl autor es ${this.autor}.
    //             \nEl año en el q se publico es ${this.año} y su genero es ${this.genero}.
    //             \nEsta disponible? ${this.disponible ? "Si" : "No"}`;
    //     },
        
    //     prestarLibro(){
    //         if(this.disponible){
    //             this.disponible=false
    //             return"se presto el libro"; 
    //         } else {
    //             return"no se pudo prestar"
    //         }
    //     },
    //     devolverLibro(){
    //         if (!this.disponible){
    //             this.disponible=true
    //             return 'Se devolvio el Libro'
    //         } else {
    //             return 'no Hay libro para devolver'
    //         }
    //     },
    //     libroDisponible(){
    //         return this.disponible ? 'El libro esta disponible' : 'El libro no esta disponible';
    //     }
        
    // }
  
    // console.log(libro.mostrarDetalles())
    // console.log(libro.prestarLibro())
    // console.log(libro.prestarLibro())
    // console.log(libro.devolverLibro())
    // console.log(libro.libroDisponible())






    //EJ:
//     class Alumno {
//         constructor(nombre, edad, carrera){
//             this.nombre=nombre;
//             this.edad=edad;
//             this.carrera=carrera;
//             this.notas=[];
//         }
//         agregarNota(nota) { this.notas.push(nota); return `se agrego ${nota} al estudiante ${this.nombre}`}
        
//         promedio(){let sum=0
//             if(this.notas.length>0){
//                 this.notas.forEach(n => { 
            
//                 sum+=n

//              })
//               return `El estudiante ${this.nombre} tiene un promedio de ${sum / this.notas.length}`
//             }
//             return `El alumno ${this.nombre} No tiene notas cargadas`
//             }
//     }
// const a1 = new Alumno("Lucas", 19, "Programador")
// const a2 = new Alumno("Trujillo", 17, "Trujeador")

// console.log(a1.agregarNota(10))
// console.log(a1.agregarNota(9))
// console.log(a1.agregarNota(8))

// console.log(a1.promedio())
// console.log(a2.promedio())


class Libro{
    constructor(titulo, autor, genero, anio ){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }
    mostrarDetalles() {
            return`El titulo es ${this.titulo}
                \nEl autor es ${this.autor}.
                \nEl año en el q se publico es ${this.anio} y su genero es ${this.genero}.
                \nEsta disponible? ${this.disponible ? "Si" : "No"}`;
        }

        prestarLibro(){
            if(this.disponible){
                this.disponible=false
                return `se presto el libro "${this.titulo}"`; 
            } else {
                return`no se pudo prestar el libro "${this.titulo}"`
            }
        }
        devolverLibro(){
            if (!this.disponible){
                this.disponible=true
                return `Se devolvio el Libro el libro "${this.titulo}"`
            } else {
                return 'no Hay libro para devolver'
            }
        }
        libroDisponible(){
            return this.disponible ? `El libro  el libro "${this.titulo}" esta disponible` : `El libro el libro "${this.titulo}" no esta disponible`;
        }
}
const l1 = new Libro("Las aventuras De luchi y las menores", 'Gabriel Montechino', 'Veridico',2026 );
const l2 = new Libro('Las islas de Eitan', 'Matias San Martin', 'Ficcion', 2007);
const l3 = new Libro('Cadaver Exquisito', 'Agustina Bazterrica', 'Distopia', 2017);
const l4 = new Libro('Las 6 o 7 aventuras de mati', 'lucho sandodawn', 'Ficcion', 6767);
const l5 = new Libro('Las proyectadas del ´78', 'lucho sandodawn', 'Ficcion', 1999);


console.log(l1.mostrarDetalles())
console.log(l1.prestarLibro())
console.log(l1.prestarLibro())
console.log(l1.libroDisponible())
console.log(l1.devolverLibro())
console.log(l1.libroDisponible())
console.log('---------------------------------------')


class Biblioteca{
    constructor(){
        this.libros=[];
    }
    agregarLibro(libro){
       if(this.libros.length < 4){
         const buscado=this.libros.find(lib=>lib.titulo===libro.titulo)
        if(!buscado){
            this.libros.push(libro)
            return `se agrego el Libro ${libro.mostrarDetalles()}`
        }
        return 'El libro ya esta en la biblioteca.'
       }
       return 'Limite Alcanzado';
    }
    mostrarLibros(libros){
        if (this.libros.length>0){
            console.log('Detalles de todos los libros')
            console.log('------------------------------')
            this.libros.forEach(libro =>{
                console.log(libro.mostrarDetalles())
        });
        }else {
        console.log('No hay libros en la Bibloteca');
        }
    }
    buscarLibroPorTitulo(titulo){
       const libro = this.libros.find(lib => lib.titulo.toLowerCase().includes(titulo.toLowerCase()))
       return libro ? libro.mostrarDetalles():'libro no encontrado'
    }
}
const b1 = new Biblioteca()
console.log(b1.agregarLibro(l1))
console.log(b1.agregarLibro(l2))
console.log(b1.agregarLibro(l3))
console.log(b1.agregarLibro(l4))
console.log(b1.agregarLibro(l5))
console.log(b1.mostrarLibros())
console.log('---------------------------------');
console.log(b1.buscarLibroPorTitulo('Cadave'))
//funcion para eliminar

function Eliminar(biblio, titulo){
    const indice = biblio.libros.findIndex(libro=>libro.titulo.toLowerCase().includes(titulo.toLowerCase()));
    if ( indice === -1 ) {
        return 'no se encontro el libro'
    }
    const confirmacion = confirm ( `Esta seguro que quiere eliminar ${biblio.libros[indice].mostrarDetalles()}? `)
    if(confirmacion){
        const eliminado= biblio.libros.splice(indice, 1)
        return 'se elimino el libro ' + eliminado[0].titulo + ' de la Biblioteca'
    }
    return `se cancelo la eliminacion del libro ${titulo} de la biblioteca`

}

console.log(Eliminar(Biblioteca, 'zz'))
console.log(Eliminar(Biblioteca, 'cadaver'))








