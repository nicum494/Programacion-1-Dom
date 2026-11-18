function ejercicio1(){

     let nombre = prompt("ingrese su nombre");
    
     let apellido = prompt("ingrese su apéllido");
    
     let edad = prompt("ingrese su edad");
    
    alert ('Hola,' +  nombre +  apellido + ' tienes,' + edad + 'años');
    
}
function ejercicio2(){
  let nombre = 'María';
  let apellido = 'Gonzáles'
  let carrera = 'tecnicatura en Programación';
  let nombreCompleto = nombre.concat(" " + apellido);
  alert(`la estudiante ${nombreCompleto} cursa en 5° año de la ${carrera}`);
}
function ejercicio3(){
 let nombre = prompt("ingrese su nombre");
 let apellido = prompt ("ingrese su apellido");
 let edad = prompt("ingrese su edad");
 console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
}

function ejercicio4() {

let nombre = 'Nicolás';
let apellido = 'Layan';

nombre = nombre.toLowerCase();
apellido= apellido.toLowerCase();
// utilizo toLowerCase() para poner en minuscula el nombre y el apellido por posibles irregularidades.
let nombreCompleto = nombre.concat(" " + apellido);
//uno el nombre y el apellido con concat().
console.log(nombreCompleto)
console.log(nombreCompleto.length);
console.log( nombreCompleto.includes("a"));

}

function ejercicio5(){
    let nombre=prompt("ingrtese su nombre");
    let apellido=prompt("ingrese su apellido");

    //declaro nombre y apellido


     nombre = nombre.toLowerCase();
     apellido= apellido.toLoweCase();

     //pongo nombre y apellido en minuscula


    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1);

    //con .charAt(0) tomo la inicial del nombre y del apellido y con el .slice(1) agarro el resto, luego los vuelvo a unir con el + y ya tendria el nombre con la inicial mayuscula y el resto minuscula, lo mismo con el apellido.


     let nombreCompleto = nombre.concat(" " + apellido);

     //uno nombre + apellido.


     console.log("nombre formateado:" + nombreCompleto);

     //muestro el nombre formateado.


}

function ejercicio6(){
    let num1 = parseInt(prompt("ingrese un Numero entero"));
    let num2 = parseFloat(prompt("ingrese un numero con decimal"));
    //le pido al usuario q ingrese dos numeros, uno entero otro decimal. El parseInt guarda UNICAMENTE numero enteros, mientras que el parseFloat permite tmb numeros decimales.
    

    let sum = num1 + num2;
    let mult = num1 * num2;
    let doble = num1 * 2;

    console.log(sum, mult, doble);
    //muestra las operaciones.


    console.log(num2.toFixed(2));
    //muestra el numero decimal con 2 decimales nomas.
}

function ejercicio7(){
    let num = parseFloat(prompt("ingrese cualquier numero"));
    let num2 = parseFloat(prompt("ingrese cualquier numero"));
    let num3 = parseFloat(prompt("ingrese cualquier numero"));

    //pido q el usuario ingrese un numero, sea entero o decimal.


    let prom= (num + num2 + num3)/3


    //sumo los tres numeros y saco su promedio.


    console.log( "el promedio es: ", prom.toFixed(2));

}

function ejercicio8(){

    let num = parseFloat(prompt("ingrese un numero"));
    let num2 = parseFloat(prompt("ingrese un numero"));
   //pido dos numeros, sea entero o decimal.

    console.log( Math.max(num, num2),
                 Math.min(num, num2),
                 Math.round(num, num2),
                 Math.floor(num, num2),
                 Math.ceil(num, num2),
                 Math.random());
//math.max() se utiliza cuando quiero que me devuelva el numero mas frande entre los dos
//math.min() lo utilizo igual que el math.max pero para que me de el numero mas chico de los dos.
//math.round() lo utilizo para que me redondee el numero al entero mas cercano.
//math.floor()redondea el numero SIEMPRE hacia abajo
//math.ceil() redondea el numero SIEMPRE hacia arriba.
//math.random() me devuelve un numero Random



}

function ejercicio9(){
    let num = parseFloat(prompt("ingrese un numero"));
    console.log(`la potencia de ${num} elevado a 2 es: ${Math.pow(num, 2)} y ${num} elevado a 3 es: ${Math.pow(num, 3)}.`);
    console.log(`la raiz de ${num} es: ${Math.sqrt(num)}`);
    //math.pow() se utiliza para potenciar el Numero "A" por el numero "B". Ej: math.pow(3,2)==6
    //math.sqrt() se utiliza para saber la Raiz de un numero asignado. Ej: math.sqrt(25)==5
}
function ejercicio10(){
    console.log(Math.floor(Math.random() *100)+1)
}

function ejercicio11(){
    let respuesta = confirm(`¿te interesa aprender programacion?`);
    if (respuesta) {
        alert("Exelente, la programacion abre muchas oportunidades :D");
    } else {
        alert("Tal vez no descubriste lo interesante que puede ser¿");
    }


    //confirm() tira un alert donde te da dos opciones a elejir, entre true o false.
}


function ejercicio12(){
    let edad = parseInt(prompt("ingrese su edad"));
    let anioAct= parseInt(prompt("ingrese el año actual"));

    let anioNacimiento = anioAct - edad

    alert(`usted nacio en el año ${anioNacimiento}`);
}


function ejercicio13(){
    let nombre = prompt("ingrese su nombre");

    console.log(`el nombre contine ${nombre.length} caracteres`);
    //con .length me devuielve la cantidad de caracteres que contiene la palabra/Nombre.

    console.log(`la variable "nombre" es tipo ${typeof(nombre)}`);

    let num = parseFloat(prompt("ingrese un numero"));

    console.log(`la variable "Num" no es un numero?: ${isNaN(num)}`);
}


function ejercicio14(){
    let nombre, edad, numFav;
    nombre = prompt("ingrese su nombre");
    edad= parseInt(prompt("ingrese su edad"));
    numFav = parseFloat(prompt("ingrese su numero favorito"));

    console.log(`el nombre en mayusculas: ${nombre.toUpperCase()}`);
    console.log(`el nombre en minusculas: ${nombre.toLowerCase()}`);

    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    
    console.log(`nombre formateado: ${nombre}`);

    let nomEdad = nombre.concat(" y tiene ", + edad);

    let num = Math.sqrt(numFav);

    console.log(nomEdad);

    console.log(`el nombre contiene la letra a?: ${nombre.includes("a")}`);

    console.log(`el resultado de ${numFav} al cuadrado es: ${Math.pow(numFav,2)} y su raiz cuadrada es ${num.toFixed(2)}`);

    console.log("Numero random: ", Math.floor(Math.random()*100 ) +1);


}