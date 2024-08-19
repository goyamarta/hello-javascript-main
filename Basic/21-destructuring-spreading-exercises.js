/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
    let myArray = [3,5,6,7,99]
    let [myArray1, myArray2] = myArray
    console.log(myArray1)
    console.log(myArray2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
    let myArrayB = [3,5,6,7]
    let [myArray10, myArray20, myArray30, myArray40, myArray50=99 ] = myArray
    console.log(myArray10)
    console.log(myArray20)
    console.log(myArray30)
    console.log(myArray40)
    console.log(myArray50)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
    let perrito = {
        name:"carlitos",
        raza:"pastor vasco",
        edad: 3
    }
    let {name, edad} = perrito
    console.log(name)
    console.log(edad)   
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
    let frutas = {
        frutaPrimavera:"fresa",
        frutaVerano:"melon",
        frutaInvierno:"manzana",
        frutaOtonio:"pera"
    }
    let {frutaPrimavera:frutaPrimavera2, frutaVerano:frutaVerano2} = frutas
    console.log(frutaPrimavera2)
    console.log(frutaVerano2)  
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let frutasB = {
    frutaPrimavera:"fresa",
    frutaVerano:"melon",
    frutaInvierno:"manzana",
    frutaOtonio:"pera",
    verduras: {
        verduraInvierno:"vainas",
        verduraPrimavera:"coliflor",
        verduraVerano:"lechuga",
        verduraOtonio:"pencas"
    }
    }
    let {verduras:{verduraInvierno:verduraInvierno2, verduraVerano:verduraVerano2}} = frutasB
    console.log(verduraVerano2)
    console.log(verduraInvierno2)
// 6. Usa propagación para combinar dos arrays en uno nuevo
    let myArrayC = [...myArrayB, ...myArray]
    console.log(myArrayC)
// 7. Usa propagación para crear una copia de un array
    let myArrayD = [...myArray]
    console.log(myArrayD)

// 8. Usa propagación para combinar dos objetos en uno nuevo
    let myObjet = {...frutasB, ...frutas}
    console.log(myObjet)

// 9. Usa propagación para crear una copia de un objeto
    let myObjetB = {...frutas}
    console.log(myObjetB)
// 10. Combina desestructuración y propagación