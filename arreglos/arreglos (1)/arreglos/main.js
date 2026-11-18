function ej1(){
const nums=[4,8,15,16,23,42];

nums.forEach(n => console.log(n) );
}
function ej2(){
    const nums=[3,12,7,25,5,18,9,30];
    const resultado= nums.filter((n) =>n > 10);
    console.log(resultado)

}
function ej3(){
    const num=[2,5,10,3,8,6], resustado=num.map((n)=>n*2);console.log(resultado);
}
function ej4(){
    const num=[14,7,-3,22,-8,5,-1], resultado=num.find((n)=>n<0); console.log(resultado);
}
function ej5(){
    const num=[12,45,67,8,91,33,55], resultado=num.findIndex((m)=>m>50); console.log(resultado);
}
function ej6(){
    const frutas=["manzana", "banana", "naranja","uva"]; frutas.push("mandarina"); console.log(frutas);
}
function ej7(){
    const letras=["rojo", "azul", "verde", "amarillo", "blanco"], elim = letras.splice(2, 1); console.log(letras);
}
function ej8(){
    const base=["a","e","i","o","u"]; console,log(base.length);
}
function ej9(){
    const base=[1,4,7,8,3,12,5,6,11,10,7.5], num2=base.map((n)=>n*2), resultado=num2.filter((m)=> m%2===0); console.log('multioplo de 2 '+resultado+ ' el doble de cada uno '+num2);
}
function ej10(){
    const num=[18,25,31,12,28,35,20], num2=num.filter((n)=>n>25), 

}-