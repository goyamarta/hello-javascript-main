/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if, else if, else

// if (si)

let age = 37

if (age == 37) {
    console.log("La edad es 37")
}

// else (si no)

if (age == 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}

// else if (si no, si)

if (age == 37) {
    console.log("La edad es 37")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37 ni es menor de edad")
}

// Operador ternario

const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

// switch

let day = 3
let saludo

switch (day) {
    case 0:
        saludo = "Lunes"
        break
    case 1:
        saludo = "Martes"
        break
    case 2:
        saludo = "Miércoles"
        break
    case 3:
        saludo = "Jueves"
        break
    case 4:
        saludo = "Viernes"
        break
    case 5:
        saludo = "Sábado"
        break
    case 6:
        saludo = "Domingo"
        break
    default:
        saludo = "Número de día incorrecto"
}

console.log(saludo)