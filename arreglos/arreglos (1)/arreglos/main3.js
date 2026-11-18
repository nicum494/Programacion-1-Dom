//segun el arreglo
const num = [5, 10, 15, 20, 25 , 10]

// encontrar la posicion del numero "15".
const idx = num.findIndex((n)=> n === 15);
console.log('el 15 esta en la posicón '+idx)
// encontrar la ultima posision del numero 10.
const idx2 = num.findLastIndex((n)=> n === 10);
console.log('el ultimo 10 en la listas esta en la posicion'+ idx2)
// Verificar si el arreglo contiene el numero 30.
const treinta = num.findIndex((n)=>n===30); 
if (treinta>=0){
    console.log("se encontro el numero 30, esta en la posición: "+ treinta)
}else{
    console.log("no se encontro el numero 30");
}
// verificar si hay algun valor mayor a 20.
const mayor = num.findIndex((n)=> n > 20)
if (mayor>=0){
    console.log("se encontro un numero mayor a 20, esta en la posición: "+ mayor);
}else{
    console.log("no se encontro un numero mayor a 20");
}