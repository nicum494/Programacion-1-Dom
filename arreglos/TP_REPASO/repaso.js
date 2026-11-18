function ejer1(){
    const nom = ["Ana", "Luis", "marta", "pedro"]
    nom.forEach((n) => console.log("hola", n))
}

function ejer2(){
    const nums = [1200, 850, 430, 2100]
    let suma = 0;
    nums.forEach((n) => suma += n)
    console.log(suma)
}

function ejer4(){
        const estu = [
            {id: 1, nombre: "lucia", nota: 4},
            {id: 2, nombre: "maia", nota: 9},
            {id: 3, nombre: "tomas", nota: 5},
            {id: 4, nombre: "jere", notas: 9}
        ]
        const nom = estu.map((n) => n.nombre)
        console.log(nom)
}

function ejer5(){
    const nom = ["ana", "luis", "marta", "pedro", "sofia", "juan"]
    const may4 = nom.filter((n) => n.length > 4)
    console.log(may4)
}

function ejer6(){
     const estu = [
            {id: 1, nombre: "lucia", nota: 4},
            {id: 2, nombre: "maia", nota: 9},
            {id: 3, nombre: "tomas", nota: 5},
            {id: 4, nombre: "jere", notas: 9}
        ]
    const enco = estu.find((e) => e.id === 3)
    const enco2 = estu.find((e) => e.id === 10)
    
    console.log("el estudiante de id 3 es: "+enco.nombre)
    console.log(enco2 ? `el estudiante de id 10 es: ${enco2.nombre}`:`no se encontro el estudiante`)

}

function ejer7(){
    const productos = [
{ nombre: "Mouse", stock: 5 },
{ nombre: "Teclado", stock: 0 },
 { nombre: "Monitor", stock: 2 },
 { nombre: "Webcam", stock: 0 }
];
const busc = productos.filter((b) => b.stock > 0)
console.log(`los productos en stock son${busc}`);
}