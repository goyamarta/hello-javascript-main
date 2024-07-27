/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
    
    // esto es un comentario de una línea

// 2. Escribe un comentario en varias líneas

    /* esto es un comentario de dos lineas
    ¿te lo crees?*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    // Cadenas de texto (string)
        let nombre = `Marta`
        let apellido = `Goya`
        let mail = `goya@gmail.com`
    // Números (number)
        let telefono = `94 672 11 57`
        let altura = `1.67`
    // Booleanos (boolean)
        let isAGirl = true
        let hablasEspaniol = false
    // Undefined
        let monedero;
    // Null
        let nullValue = null
    // Symbol
        let mySymbol = Symbol("mysymbol")
    // BigInt
        let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129) // Utiliza la función BigInt() para convertir un número en un BigInt
        let myBigInt2 = 817239871289371986589716389471628379612983761289376129n  // utiliza el sufijo 'n' para indicar que el valor es un BigInt directamente

// 4. Imprime por consola el valor de todas las variables
        console.log(nombre)
        console.log(apellido)
        console.log(mail)
        console.log(telefono)
        console.log(altura)
        console.log(isAGirl)
        console.log(hablasEspaniol)
        console.log(monedero)
        console.log(nullValue)
        console.log(mySymbol)
        console.log(myBigInt)
        console.log(myBigInt2)

// 5. Imprime por consola el tipo de todas las variables
        console.log(typeof nombre)
        console.log(typeof apellido)
        console.log(typeof mail)
        console.log(typeof telefono)
        console.log(typeof altura)
        console.log(typeof isAGirl)
        console.log(typeof hablasEspaniol)
        console.log(typeof monedero)
        console.log(typeof nullValue)
        console.log(typeof mySymbol)
        console.log(typeof myBigInt)
        console.log(typeof myBigInt2)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
        // Cadenas de texto (string)
        nombre = `Natalia`
        apellido = `Proaño`
        mail = `natalia@gmail.com`
        // Números (number)
        telefono = `+34 94 672 11 57`
        altura = `1.87`
        // Booleanos (boolean)
        isAGirl = false
        hablasEspaniol = true
        // Symbol
        mySymbol = Symbol("mysymbol")
        // BigInt
        myBigInt2 = 2222817239871289371986589716389471628379612983761289376129n 
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
        nombre = 100
        apellido = false
        mail = ["goya@gmail.com", "Marta"]
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
        // String
        const pelicula = "X"
        // Números
        const deuda = 20
        // Bolean
        const creoEnLosDuendes = false
        // Undefined
        const anchura = "" 
        // Null
        const constanteNula = null
        // Symbol
        const simbolo1 = Symbol('descripcion-opcional');
        // BigInt
        const numerazo = 2222817239871289371986589716389471628379612983761289376129n
// 9. A continuación, modifica los valores de las constantes
        pelicula = "Z"
        deuda = 40
        creoEnLosDuendes = true
        anchura = "" 
        constanteNula = null
        simbolo1 = Symbol('descripcion-general') // me da error
        numerazo = 9871289371986589716389471628379612983761289376129n
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser