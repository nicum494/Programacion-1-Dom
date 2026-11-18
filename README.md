# programacion
trabajos de taller

# Descripcion
taller de programación I-5to Com b

## Temas trabajados:
-selectivas/condicionales -> if/else, switch
-repetitivas -> for, do while,while
-Arreglos -> Simples y compuestos, Métodos
-P.O.O -> Clases, subclases, objetos y pilares
-D.O.M

##
-Selectivas: Permitenque el programa tome decisiones. Si la condición es verdadera ejecuta una acción; si no, hace otra

-IF
```bash
if (!this.disponible){
      this.disponible=true
       return 'Se devolvio el Libro'
     } else {
                return 'no Hay libro para devolver'
     }
```
##
-repetitivas: permiten ejecutar un bloque de instrucciones varias veces sin reescribir el código.

- FOR
- descripcion: La utilizamos cuando SABEMOS cuantas veces queremos que repita

```bash
    for (let i=1, i <= estudiantes.lenght, i++){
        console.log(i) //va a repetir segun la cantidad de estidiantes q haya. si hay 10 Estudiantes, repite 10 veces.
    }
```
- Do While
descripcion: Repite X veces, Se utiliza cuando no sabemos cuantas veces tenemos q repetir, se ejecuta almenos 1 VES.
```bash
    do (
    )while()
```



##
-DOM: Representaciónestructurada d euna pagina WEB en forma de Arbol; Vinculamos HTML (visual), Java Script (logica) y CSS (Estilos).
- JS
```bash
    let titulo = documento.createElement("h1");
    titulo.textContent = "¡Hola Mundo!";
    titulo.classList.add("Titulo");
```

- HTML
```bash
    let <h1>¡Hola Mundo!</h1>
```

- CSS
```bash
    .titulo {
        color: pink;
    }
```
