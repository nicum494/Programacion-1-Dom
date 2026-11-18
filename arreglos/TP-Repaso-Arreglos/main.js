function ej1(){
    //Ejercicio 1: Mostrar un saludo para cada alumno utilizando forEach.
    //Arreglo base: [“Ana”, “Luis”, “Marta”, “Pedro”]
    const nombres = ["Ana", "Luis", "Marta", "Pedro"]
    
    nombres.forEach((nombre) => {
    console.log("Hola, ", nombre)
    })
}

function EJ2(){
// Ejercicio 2: Calcular el total de una compra recorriendo los precios con forEach y
// sumando en una variable externa.
// Arreglo base: [1200, 850, 430, 2100]

const nums = [1200, 850, 430, 2100]
    let suma = 0;
    nums.forEach((n) => suma += n)
    console.log(suma)
}
function EJ3(){
// Ejercicio 3: Aplicar el 21% de IVA (1.21) a cada precio y generar un nuevo arreglo
// con map. Utilizar “Math.round”.
// Arreglo base: [1000, 2500, 800, 1500]
    const nums = [100, 2500, 800, 1500]
    const numIva = nums.map((n) => Math.round(n*1.21))
    console.log(numIva)
}
function ej4(){
// Ejercicio 4: Obtener un arreglo que contenga solo los nombres de los estudiantes
// usando map.
// Arreglo base:
// const estudiantes = [
// { id: 1, nombre: “Lucia”, nota: 4 },
// { id: 2, nombre: “Maia”, nota: 9},
// { id: 3, nombre: “Tomas”, nota: 5 },
// {id: 4, nombre: “Jeremías”, nota: 9 }
// ]

  const estudiantes = [
            {id: 1, nombre: "lucia", nota: 4},
            {id: 2, nombre: "maia", nota: 9},
            {id: 3, nombre: "tomas", nota: 5},
            {id: 4, nombre: "jeremias", notas: 9}
        ]
        const nombre = estudiantes.map((n) => n.nombre)
        console.log(nombre)
}
function ejer5(){
    const nom = ["ana", "luis", "marta", "pedro", "sofia", "juan"]
    const may4 = nom.filter((n) => n.length > 4)
    console.log(may4)
}
function ej6(){
    const estudiantes = [
            {id: 1, nombre: "lucia", nota: 4},
            {id: 2, nombre: "maia", nota: 9},
            {id: 3, nombre: "tomas", nota: 5},
            {id: 4, nombre: "jeremias", notas: 9}
        ]
        const buscar = estudiantes.find((e)=> e.id===3)
        //devuelve un elemento q cumpla la condicion, en este caso el alumno con el id N°3.
        const buscar2 = estudiantes.find((e)=> e.id===10)
        //devuelve undefine
        if (buscar2 ){
            console.log(buscar2)
            //si encuientra un elementocon id = 10 lo devuelve
        } else {//si no
            console.log("producto no encontrado")
        }
}

function ej7(){
    const productos = [
        { nombre: "Mouse", stock: 5 },
        { nombre: "Teclado", stock: 0 },
        { nombre: "Monitor", stock: 2 },
        { nombre: "Webcam", stock: 0 }
    ];
    const disponible = productos.filter((p)=> p.stock>0)
    console.log(disponible)
}



//ej 8
const chango = ["pan", "Mayonesa"]
function ej8(AgregarProducto){
// Ejercicio 8: Agregar productos a un carrito con push, pero solo si todavía no están.
// Probar agregando "huevos" (se agrega) y "mayonesa" (no se agrega).
// Tip: Si no está, podemos utilizar “includes”.
// Arreglo base: [“pan”, “mayonesa”]

 
if (!chango.includes(AgregarProducto)){
    chango.push(AgregarProducto)
    console.log(chango)
} else {
    console.log("El producto ya esta agregado")
}
}

function ej9(){ 
     const estudiantes = [
            {id: 1, nombre: "lucia", nota: 4},
            {id: 2, nombre: "maia", nota: 9},
            {id: 3, nombre: "tomas", nota: 5},
            {id: 4, nombre: "jeremias", nota: 9}
     ]
     const aprobados = estudiantes.filter((e)=>e.nota>=6).map((e)=>`${e.nombre}: ${e.nota}`).forEach((t)=> console.log(t));
     estudiantes.push({id: 1, nombre: 'mateo', nota: 7})
     console.log('-----------Estudiante Agregado------------');
     aprobados = estudiantes.filter((e)=>e.nota>=6).map((e)=>`${e.nombre}: ${e.nota}`).forEach((t)=> console.log(t));

}
// ej 10
//Buesqueda:
//método. filter(), Devuelve un nuevo arreglo solo con los elementos que cumplan la condición. El arreglo original no se modifica
//método. findIndex() Como find, pero devuelve el índice del elemento.Si no lo encentra, devuelve -1
//Transformacion:
//método .splice , Modifica el arreglo original.Puede eliminar, insertar o reemplazar. Devuelve un arreglo con los elementos eliminados
//método push , Agrega uno o más al final del arreglo y devuelve la nueva longitud. Modifica el arreglo original.

//ej 11: biblioteca
//a) obtener los titulos de los libos que esten disponibles y sean del genero "fantasia".
//b) agregar un nuevo libro que este disponible y sea del genero "clasico".

const libros = [
    {titulo:"Hobbit" , disponible: true, genero: ["fantasia", "Aventura"]},
    {titulo: "Drácula", disponible: false, genero: ["Terror", "Clasico"]},
    {titulo: "Harry Potter", disponible: true, genero: ["fantasia", "Juvenil"]},
    {titulo: "It", disponible: true, genero: ["Tertot"]},
    {titulo: "Eragon", disponible: false, genero: ["Fantasia", "Aventura"]}
]
const lib=libros.filter((l)=>l.disponible && l.genero.includes('fantasia'))
console.log(lib);
libros.push({Titulo: "El señor De Los Anillos", disponible: true, genero: ["fantasia", "clasico"]});
console.log(libros);
//ej12: Alumnos y Materias 
//a) Obtener los nombres de los alumnos que cursan "Matematica".
//b) Averiguar en que posicion de la lista esta "Brunella".
function ej12(){
    const alumnos = [
        {nombre: "Gonzalo", materias: ["Matematica", "Fisica"]},
        {nombre: "Magali", materias: ["Lengua", "Historia"]},
        {nombre: "Agustin", materias: ["Matematica", "Lengua"]},
        {nombre: "Brunnella", materias: ["Fisica", "Historia"]}
    ]
const cursan = alumnos.filter((a)=>a.materia.includes("Matematica")).forEach((t) => console.log('los alumnos q cursan matematicas son ' + t));
const encontrar = alumnos.findIndex((a)=>a.nombre.includes("brunnella"))
}


//tp repaso
//Alan... estamos jodidos...

// 1) Presente de estudiantes.
console.log('----------------------------------------')

let presentes = ["Jeremías", "Ariana", "Julián", "Maia", "Gonzalo"];

// a) Escribir una función para verificar si "Ariana" se encuentra dentro del arreglo.

function buscador(estudiante){
    

    if (!estudiante){
        console.log("no se busco ningun estudiante")
        return;
    }
    const arreglado = presentes.map( (p) => p.toLowerCase());
    const buscar = arreglado.includes(estudiante.toLowerCase());
    console.log(buscar ? `${estudiante} si esta presente`: `${estudiante} no esta presente` )
}
console.log('----------------------------------------')

// b) Muestra por consola la cantidad total de estudiantes presentes

const cantidad = presentes.length

// c) Recorrer el arreglo e imprimir por consola en formato: "Estudiante N° [indice + 1]: Nombre"

presentes.forEach((p,i=1)=> console.log(`Estudiante N° ${i+1}: ${p}`));

console.log('----------------------------------------')
// 2) Procesamiento de temperaturas.

let temperaturas = [22, 28, 15, 31, 40, 19, 37];

// a) Crear un nuevo arreglo con las temperaturas agregando el formato: "10°C"

const nuevo = temperaturas.map((t)=>`${t}°C`)
console.log('temperatura formateada: ' + nuevo)

// b) Filtrar las temperaturas consideradas "cálidas" (mayores a 25)

const tmpAltas = temperaturas.filter((t)=> t > 25)
console.log('temperaturas Altas/Calidas: '+tmpAltas)

// c) Encontrar por índice la temperatura más baja (15)

const tmpBaja = temperaturas.findIndex((t)=>t==15)
console.log(`la temperatura mas baja esta en la posicion: ${tmpBaja+1}`);

// 3) Validación de usuarios.
console.log('----------------------------------------')

let usuarios = ["admin", "sofia24", "leo", "valen_g", "programador_js", "luz"];

// a) Utiliza filter para generar un nuevo arreglo con los usuarios válidos (aquellos cuya
// longitud (length) sea de al menos 6 caracteres).

const validos = usuarios.filter((u)=> u.length>=6)
console.log('Los USUARIOS "Validos"(mas de 6 caracteres) son: '+ validos)
// b) Usa find para buscar al primer usuario que comience o contenga la palabra
// "admin".
const buscar = usuarios.find((u)=>u.startsWith("a") || u.includes("admin"));
console.log(buscar)
console.log('----------------------------------------')
// c) Utiliza forEach para comprobar e imprimir en consola si cada usuario contiene un
// guion bajo "_" usando includes.

const guionBajo = usuarios.filter((u)=>u.includes('_')).forEach((u)=>console.log(`Este Usuario contiene "_": ${u}`))

// 4) Filtro de precios.
console.log('----------------------------------------')

let precios = [1200, 4500, 800, 12000, 3100, 9500, 500];

// a) Filtra los precios con filter para obtener únicamente aquellos artículos que
// cuesten más de $3.000.

const caros = precios.filter((p)=>p>3000)
console.log(`Los precios que superan los $3000 son: ${caros}`)
// b) Aplica un descuento del 15% a todos los precios de la lista original usando map y
// guarda los resultados en un nuevo arreglo “preciosConDescuento”.
const precioConDescuento = precios.map((p)=> p*0.15)
console.log(`Los precios con 15% de descuento son: ${precioConDescuento}`)
// c) Utiliza findIndex para encontrar la posición del primer producto que supere los
// $10.000.

const diez = precios.findIndex((p)=>p>10000)
console.log(`el primer producto que supera los 10k esta en la posicion: ${diez}`)
// 5) Inventario de Verdulería.

console.log('----------------------------------------')
let productos = [
 { id: 1, nombre: "Pera", precio: 1500, stock: 20 },
 { id: 2, nombre: "Manzana", precio: 2200, stock: 0 },
 { id: 3, nombre: "Banana", precio: 1800, stock: 15 },
 { id: 4, nombre: "Frutilla", precio: 3500, stock: 5 },
 { id: 5, nombre: "Naranja", precio: 1200, stock: 0 }
];

// a) Obtener mediante filter una lista con los productos disponibles para la venta
// (aquellos cuyo stock sea mayor a 0).
console.log('----------------------------------------')
console.log('los productos disponibles son: ');
const disponibles = productos.filter((p)=>p.stock>0 ).forEach((p)=>console.log(p.nombre, ': ', p.stock));
console.log('----------------------------------------')
// b) Utiliza find para obtener el objeto completo del producto con id igual a 4.
const completo = productos.find((p)=>p.id==4)
console.log('el producto con id "4" es:',completo)


// c) Utiliza map para crear una lista formateada de strings con el formato: "Producto:
// [nombre] - $ [precio]".

const formateado = productos.map((p)=> `${p.nombre} - $${p.precio}`).forEach((p)=> console.log(p))

// d) Usa filter combinado con .length para calcular cuántos productos en total tienen
// un precio inferior a $2.000.

const total = productos.filter((p)=>p.precio<2000).length
console.log('total de productos con precio menor a $2000 son: ', total);


//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------OTRO REPASO MÁS---------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//-----------------------alan... estamos el doble de jodidos...-------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------



/* 
a) Utiliza filter para obtener un nuevo arreglo con los tÃ­tulos que sean exclusivamente 
del tipo "PelÃ­cula" Y tengan un rating mayor o igual a 8.6.
b) Usa find para localizar el objeto completo del primer contenido 
correspondiente al gÃ©nero "Comedia".

c) Aplica map para generar un nuevo arreglo de objetos donde cada elemento conserve el titulo 
y agregue una propiedad calculada duracionHoras (redondeando o dividiendo duracionMin por 60).

d) Usa findIndex para hallar la posiciÃ³n del primer contenido cuya duraciÃ³n 
sea superior a los 150 minutos
*/

console.log('----------------------------------------')
let contenido = [
  { id: 1, titulo: "Inception", tipo: "PelÃ­cula", duracionMin: 148, genero: "Sci-Fi", rating: 8.8 },
  { id: 2, titulo: "Stranger Things", tipo: "Serie", duracionMin: 50, genero: "Sci-Fi", rating: 8.7 },
  { id: 3, titulo: "The Office", tipo: "Serie", duracionMin: 22, genero: "Comedia", rating: 8.9 },
  { id: 4, titulo: "Interstellar", tipo: "PelÃ­cula", duracionMin: 169, genero: "Sci-Fi", rating: 8.6 },
  { id: 5, titulo: "Parasite", tipo: "PelÃ­cula", duracionMin: 132, genero: "Drama", rating: 8.5 }
];
console.log('los titulos que son excusivamente de "PelÃ­cula" y tienen un rating mayor o igual a 8.6 son: ')
const nv = contenido.filter((p)=>p.tipo==="PelÃ­cula" && p.rating>=8.6).forEach((p)=>console.log(p.titulo, ' - ', p.rating));


/*
a) Filtra los turnos con filter para obtener Ãºnicamente aquellos que estÃ©n pendientes de 
confirmaciÃ³n (confirmado === false).

b) Utiliza find para buscar la ficha del turno cuya especialidad sea "PediatrÃ­a".

c) Combina filter y la propiedad length para calcular la cantidad de turnos confirmados 
para la especialidad "CardiologÃ­a".

d) Usa forEach para recorrer los turnos e imprimir en consola la frase: 
"[paciente] - Especialidad: [especialidad] - Estado: [Confirmado / Pendiente]"
*/

let turnos = [
  { id: 101, paciente: "Carlos Gomez", especialidad: "CardiologÃ­a", confirmado: true, costo: 4500 },
  { id: 102, paciente: "Mariana Lopez", especialidad: "DermatologÃ­a", confirmado: false, costo: 3800 },
  { id: 103, paciente: "Roberto Diaz", especialidad: "CardiologÃ­a", confirmado: true, costo: 5000 },
  { id: 104, paciente: "LucÃ­a Fernandez", especialidad: "PediatrÃ­a", confirmado: false, costo: 3200 },
  { id: 105, paciente: "Gonzalo Perez", especialidad: "DermatologÃ­a", confirmado: true, costo: 4000 }
];

/* 
a) Ejecuta o analiza el cÃ³digo. Â¿Por quÃ© la variable ofertas termina conteniendo todos los productos 
en lugar de filtrar solo los que corresponden? Â¿QuÃ© error de sintaxis/lÃ³gica se cometiÃ³ en la condiciÃ³n del .filter()?

b) Escribe el cÃ³digo corregido de forma que ofertas solo contenga los objetos cuyo atributo oferta sea verdaderamente true.
*/

let carrito = [
  { producto: "Teclado Mechanical", precio: 15000, oferta: true },
  { producto: "Mouse Gamer", precio: 8000, oferta: false },
  { producto: "Monitor 24'", precio: 65000, oferta: true }
];

// se quiere obtener la cantidad de productos en oferta:
let ofertas = carrito.filter(item => item.oferta = true);

console.log("Cantidad de ofertas:", ofertas.length);
console.log("Lista de ofertas:", ofertas);


/* 
a) Explica por quÃ© falla la Ãºltima lÃ­nea del cÃ³digo cuando dniBuscado no coincide con ningÃºn 
registro del arreglo. Â¿QuÃ© valor retorna .find() cuando no encuentra ninguna coincidencia?

b) CorrÃ­gelo agregando una estructura condicional (if / else) para verificar primero 
si alumnoEncontrado existe antes de intentar acceder a sus propiedades .nombre y .nota. */

let estudiantes = [
  { dni: 40123456, nombre: "Camila", nota: 9 },
  { dni: 41987654, nombre: "Agustin", nota: 7 },
  { dni: 42555666, nombre: "Tomas", nota: 4 }
];

let dniBuscado = 45000000; // DNI que NO estÃ¡ en la lista

let alumnoEncontrado = estudiantes.find(e => e.dni === dniBuscado);

// Intenta mostrar el mensaje directamente:
//console.log(`El alumno es ${alumnoEncontrado.nombre} y su nota es ${alumnoEncontrado.nota}`);