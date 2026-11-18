// encender, apagar, cargar } metodo. 
// bateria, modelo, espacio } Atributos


class Celular{
    constructor(bateria, modelo, espacio){
        this.modelo=modelo;
        this.espacio= 128;
        this.bateria= 100

    }
    cargar(){
        do{
            if (this.bateria<100){
                console.log(`cargandio (${this.bateria}%)`)
            } else {
                console.log()
            }
        }while (this.bateria<100)

    }
}