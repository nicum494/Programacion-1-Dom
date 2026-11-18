class Libro {
    constructor(titulo, autor,){
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true
    }

    //ejercicios extra
    //1) En clase Libro agregar metodo "resumen" con titulo y autor. Mostrar en las 3 instancias

    resumen(){
        console.log(`Resumen: 
            \n Titulo: ${this.titulo}
            \n Autor: ${this.autor}
            \n ${this.disponible? 'esta disponibel' : 'No esta disponible'}`)
    }

//2

    set cambiarTitulo(nueviotitulo){
        if(nueviotitulo==""){
            console.log('ingrese un titulo valido')
        }
    }; 


    




    //----o----o----o----o----o----o----o---o----o----o----o----o----\\

    //7
    presentar(){
        console.log(`El libro ${this.titulo} fue eascrito por ${this.autor} y tiene ${this.paginas} paginas`);
    }

  
    //8
    //GETTER -> lectura
    get obtenerTitulo(){
        return this.titulo.toUpperCase();//devuelve en mayusculas.
    }

    //Setter -> requiere parametro
    set asignarPaginas(nuevasCantPaginas){
        //condicional selectiva

        if(nuevasCantPaginas > 0) {
            this.paginas=nuevasCantPaginas;
        } else {
            console.log('la cantidad de paginas a agregar debe ser mayor a 0')
        }
    }
}

  //----o----o----o----o----o----o----o---o----o----o----o----o----\\
   //------------------------ejersicios extra-------------------------\\
    console.log(l1.resumen());
    console.log(l2.resumen());
    console.log(l3.resumen());
    console.log('//----o----o----o----o----o----o----o---o----o----o----o----o----\\')





    //----o----o----o----o----o----o----o---o----o----o----o----o----\\
const l1 = new Libro('El señor de los trujillos', 'Scialaba' );
const l2 = new Libro('Mira marge, soy Brasilero', 'AaaAAAAHahhhhhAH');
const l3 = new Libro('la lucheada de la 2014', 'luciano Sandoval 19 añitos' );

console.log(l1["titulo"]);
console.log(l2.autor);
console.log(l3.autor); 
console.log('----------------------------')
l1.titulo = 'la trujeada del 87'
l2["paginas"] = 20

console.log(l1)
console.log(l2)

l1.publicacion = 1999
l2["descripcion"] = 'Trata de homero demostrando que si es brasilero'

console.log(l1)
console.log(l2)
console.log(l3)













