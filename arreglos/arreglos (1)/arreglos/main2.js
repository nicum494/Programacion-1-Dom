const vacio = []
const frutas = ["manzanas", "banana", "naranja"]

console.log(frutas[0])
console.log(frutas[2])

frutas[1] = "pera"
console.log(frutas)

//propiedad length

const numeros = [10, 20, 30, 40, 50]
console.log(numeros.length - 1)
console.log(ultimo)

for (let i = 0; i < numeros.length; i++) {
console.log(numeros[i])
}

//método push , Agrega uno o más al final del arreglo y devuelve la nueva longitud. Modifica el arreglo original.

const tareas = ["estudiar", "hacer ejercicio"]
tareas.push("leer")
console.log(tareas)


tareas.push("cocinar", "descansar")
console.log(tareas.length)


//método.forEach(), ejecuta una función por cada elemento. No devuelve un nuevo arreglo, simplemente itera. Ideal para imprimir, modificar el DOM,etc.

const nombres = ["Ana", "Luis", "Mia"]
nombres.forEach((nombre) => {
console.log("Hola, ", nombre)
})



nombres.forEach((nombre, i) => {
console.log(`Posicion ${i}: ${nombre}`)
})


//método. filter(), Devuelve un nuevo arreglo solo con los elementos que cumplan la condición. El arreglo original no se modifica

const edades = [12, 25, 17, 30, 15, 11]
const mayores = edades.filter((edad) => edad => 18)
console.log(mayores)

const productos = ["apple", "mango", "pear", "apricot"]
const conA = productos.filter((p) => p.startsWith("a"))
console.log(conA)

//método.map(), Devuelve un nuevo arreglo del mismo largo con cada elemento transformado según la función. El original no cambia

const nums = [1, 2, 3, 4]

const dobles = nums.map((n) => n * 2)
console.log(dobles)

const precio = [100, 250, 80]
const formateados = precio.map((p) => `$${p}`)
console.log(formateados)


//método.find() Devuelve el primer elemento que cumple la condición. Si ninguno cumple, devuelve undefined
const numeros2 = [3, 7, 15, 2, 22, 9]
const resultado = numeros2.find((n) => n > 10)
console.log(resultado)
const palabras = ["luna", "sol", "mar", "cielo", "monte"]
const res2 = palabras.find((p) => p.startsWith("m"))
console.log(res2)
//diferencia con filter:find devuelve un solo elemento(el primero). filter devuelve un arreglo con todos los que coinciden


//método. findIndex() Como find, pero devuelve el índice del elemento.Si no lo encentra, devuelve -1

const frutas2 = ["manzana", "banana", "naranja", "uva"]
const idx = frutas2.findIndex((f)=> f === "naranja" )
console.log(idx)
const noExiste =frutas2.findIndex((f) => f === "kiwi")
console.log(noExiste)

const pos= frutas2.findIndex((f) =>f === "banana")
if(pos !== -1) frutas[pos] = "mango"
console.log(frutas);


//método .splice , Modifica el arreglo original.Puede eliminar, insertar o reemplazar. Devuelve un arreglo con los elementos eliminados

const letras = ["a", "b", "c", "d", "e"]

const elim= letras.splice (1,2)
console.log(letras)
console.log(elim)



letras.splice(1, 0 ,"x", "y")
console.log(letras)

letras. splice (2,1,"Z")

console.log(letras)