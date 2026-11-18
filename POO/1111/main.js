

class Producto {
    #stock
 constructor(nombre, precio, stock) {
 this.nombre = nombre;
 this.precio = precio;
 this.#stock = stock;

 }
 describir() {
 console.log(`${this.nombre}: $${this.precio} (stock:
${this.#stock})`);
 }

 obtenerStock(){
    while(isNaN(this.#stock)||this.#stock<=0){
        return 'No se encontro stock disponible'
    }

    return `Stock disponible: ${this.#stock}`
 }

 reponer(cantidad){
    while(isNaN(cantidad) || cantidad<=0){
        return 'La cantidad que desea reponer no es valida'
    }
    console.log(`Reponiendo Stock. 
            \n  Cantidad a rellenar: ${cantidad}`)
    for(let i=0; i<cantidad; i++){
        this.#stock+=1
            if (this.#stock===cantidad){
                console.log('Se repuso el Stock.');
            }
    }
 }
 vender(cantidad){
    while(isNaN(this.#stock)||this.#stock<=0){
        return 'No se encontro stock disponible'
    }
    console.log('vendiendo preductos.')
    for (let i = 0; i<cantidad;i++){
        this.#stock--
         if (this.#stock===0){
            return 'Ya No hay stock para vender'
        } else {
            console.log(`cantidad de productos vendidos: ${i+1}`)
        }
    }
 }

}
const p1= new Producto('pan', 100, 0)