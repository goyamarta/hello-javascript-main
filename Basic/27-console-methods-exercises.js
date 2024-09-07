/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// 1. Crea un función que utilice error correctamente
    console.error("esto es un super error")

// 2. Crea una función que utilice warn correctamente
    console.warn("esto es un mini warm")
// 3. Crea una función que utilice info correctamente
    console.info("esto es un mensaje info")
// 4. Utiliza table
    let mytabla = [
        { joyas: "pendiente 1", precio: 30 },
        { joyas: "pulsera", precio: 10 },
        { joyas: "pendiente 2", precio: 40 }
    ]
    console.table(mytabla)
// 5. Utiliza group
    console.group("myjoya:")
    console.log("pendiente aro")
    console.log("pendiente largo")
    console.log("pendiente pequepo")
    console.groupEnd()

// 6. Utiliza time
    console.time("time1")
    for (let i = 0; i < 10000; i++) {
    }
    console.timeEnd("time1")

// 7. Valida con assert si un número es positivo

    let numero = 4;
    console.assert(numero < 0, "El número no es negativo.");
// 8. Utiliza count
    console.count("Click")
    console.count("Click")
    console.count("Click")
    console.countReset("Click")
    console.count("Click")
// 9. Utiliza trace
    function funcA() {
        funcB()
    }

    function funcB() {
        console.trace("Seguimiento de la ejecución.")
    }

    funcA()
// 10. Utiliza clear
   console.clear()