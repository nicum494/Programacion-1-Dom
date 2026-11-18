class Celular {
    #pin
    #intentos
    #bloqueado
    constructor(marca, modelo,PIN, prender){
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = 66;
        this.#pin = PIN;
        this.#intentos = 0;
        this.#bloqueado = 0;
        this.prender = prender = false;
    }
    cargar(){
        while (isNaN(this.bateria) || this.bateria<0){
           
            return 'nivel de bateria no valido';
        }
        do{
            if (this.bateria<100){
                this.bateria++
                console.log(`bateria: ${this.bateria }%`)
            } else {
                return 'bateria cargada'
            }
        }while(this.bateria!=100)
    }
    usar(minutos){
        while (isNaN(minutos) || minutos<0){
            return 'Canidad de minutos invalida, sos porfiado che.'
        }
        let i=1
        console.log('bateria del celular: '+ this.bateria + '%')
        do{
            if (this.bateria>0){
                i++
                this.bateria-- 
                console.log(`Celular en uso, Bateria restante: ${this.bateria}%`)
            } else {
                return 'sin Bateria'
            }
            
        }while(i!=minutos)
    } 
    desbloquear(pin){
        if (this.#pin === pin){
            console.log('coincide el pin');
            if (this.#bloqueado>0){
                this.#intentos = 0
            }
        } else {
            console.log('el pin no coincide')
            this.#intentos++
            console.log(this.#intentos);
            if (this.#intentos === 3 ){
                this.#bloqueado ++
                return 'Celular Bloqueado'
        }
        }
        
    }
    cambiarPin(pinActual, pinNuevo){
        if (pinActual === this.#pin){
            this.#pin = pinNuevo;
            console.log('se cambio el pin')
        }else {
        console.log('pin incorrecto');
        }
    }
    //-----------Practica 4-----------\\
        encender(){
            if (this.prender===false){
                this.prender=!this.prender
                return 'Prediendo Celular'
            } else{
                return 'Celular ya prendido'
            }
        }
        apagar(){
            if (this.prender){
                this.prender=!this.prender
                return 'apagando Celular'
            } else{
                return 'Celular ya apagado'
            }
        }

}

const c1 = new Celular ('jijo21', 2015, 4321);
const c2 = new Celular ('trijo67', 2026, 1234);

//-----------------RTA-----------------\\

//Practica 2:
//5)¿Qué pasa al escribir “celular.pin” desde afuera de la clase?
//-devuelve UNDEFINED 
//¿Y con “celular.#pin”?
//-Devuelve el pin oculto EJ: c1.#pin => 4321
//ng+
    //-----------Practica 3-----------\\
class Smartphone extends Celular {
    constructor (marca, modelo, sistema, pin, bateria, apps){
        super(marca, modelo, pin, bateria);
        this.sistema = sistema;
        this.apps = [ ] 
    
    }  
    instalarApp(nombre){
            if (!this.apps.includes(nombre)){
            this.apps.push(nombre);
            console.log('la app fue agregada')
            } else {
            return 'app agregada previamente'
            }
        }
        desinstalarApps(nombre){
            if (this.apps.includes(nombre)){
             const lugarApp = this.apps.findIndex((a)=> a.includes(nombre))+1
                console.log('App encontrada, se encuentra en la posicion N° ', lugarApp);
                this.apps.splice(1, lugarApp)
                console.log('desinstaladno app')
            } else {
                console.log('App no encontrada')
            }
        }
        //--------------practica 4---------------\\
        usar(minutosDoble){
        while (isNaN(minutosDoble) || minutosDoble<0){
            return 'Canidad de minutos invalida, sos porfiado che.'
        }
        let i=1
        console.log('bateria del celular: '+ this.bateria + '%')
        do{
            if (this.bateria>0){
                i++
                this.bateria -=2 
                console.log(`Celular en uso, Bateria restante: ${this.bateria}%`)
            } else {
                return 'sin Bateria'
            }
            
        }while(i!=minutosDoble)
    } 

    //-----------Practica 4-----------\\
    encender(){
            if (this.prender===false){
                this.prender=!this.prender
                return `iniciando ${this.sistema}`
            } else{
                return `${this.sistema} ya iniciado`
            } 
        }
        apagar(){
            if (this.prender){
                this.prender=!this.prender
                return `apagando ${this.sistema}`
            } else{
                return `${this.sistema} ya apagado`
            }
        }
}
const s1 = new Smartphone('jijo21', 2015, 4321);


class CelularBasico extends Celular{ 
    encender(){
            if (this.prender===false){
                this.prender=!this.prender
                return `Prendiendo Celular Basico`
            } else{
                return `Celular Basico prendido`
            } 
        }
        apagar(){
            if (this.prender){
                this.prender=!this.prender
                return `apagando Celular Basico`
            } else{
                return `Celular Basico ya apagado`
            }
        }
}

const celular = [
    new  Celular('jijo12', 2015, 4321),
    new  Smartphone('jijo214', 2015,'android' ,1234),
    new  CelularBasico('jijo23', 2015, 2444),
]


celular.forEach((c)=> console.log( c.encender()));

// RTA:

//5) Imprime Difr}erentes resultados porque los mensajes en cada clase cambian, el mensaje del metodo encender() de la clase smartphone no es elñ mismo que el de la clase CelularBasico.