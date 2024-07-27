/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
    const nombre = "Marta"
    if (nombre == "Marta") {
        console.log("marta")
    }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
    const nombreApp = "XX";
    const contrasenia = "lobo";
    const usuarioIngresado = "XX"; // Ingresa el nombre de usuario proporcionado por el usuario
    const contraseniaIngresada = "lobo"; // Ingresa la contraseña proporcionada por el usuario

    if (usuarioIngresado === nombreApp && contraseniaIngresada === contrasenia) {
        console.log("Has ingresado correctamente");
    } else {
        console.log("El usuario o la contraseña son incorrectos");
    }
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    const numero = 4
    if (numero > 0){
        console.log("es un número positivo") 
    } else if (numero < 0 ){
        console.log("es un número negativo")
    } else{
        console.log("Es 0")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
    const usuarioVotar = 16;
    if (usuarioVotar >= 18){
        console.log("El usuario puede votar")
    } else {
        let aniosFaltanParaVotar = 18 - usuarioVotar;
        console.log(`El usuario no puede votar, le falta ${aniosFaltanParaVotar} años.`)
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
    const edad2 = 22;    
    const categoria = (edad2 >= 18) ? "Eres una persona adulta" : "Eres menor de edad";
        console.log(categoria); 
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
    let mes = 6;
    let estacion;

    if (mes >= 1 && mes <= 2 || mes === 12) {
        estacion = "invierno";
    } else if (mes >= 3 && mes <= 5) {
        estacion = "primavera";
    } else if (mes >= 6 && mes <= 8) {
        estacion = "verano";
    } else if (mes >= 9 && mes <= 11) {
        estacion = "otoño";
    } else {
        estacion = "mes no válido";
    }

    console.log(`La estación del año en la que nos encontramos es ${estacion}`);
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
    const mes2 = 6;
    let dias;

    if (mes2 === 1 || mes2 === 3 || mes2 === 5 || mes2 === 7 || mes2 === 8 || mes2 === 10 || mes2 === 12) {
        dias = 31;
    } else if (mes2 === 2) {
        dias = 28; // Considerando un año no bisiesto
    } else if (mes2 === 4 || mes2 === 6 || mes2 === 9 || mes2 === 11) {
        dias = 30;
    } else {
        dias = "mes no válido";
    }

    console.log(`El mes ${mes2} tiene ${dias} días`);

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
    let idioma = "castellano";
    let saludo;

    switch (idioma) {
        case "ingles":
            saludo = "Hello"
            break;
        case "castellano":
            saludo = "Hola"
            break;
        case "euskera":
            saludo = "Kaixo"
            break;
        default:
            saludo = "No existe"
    }

    console.log(saludo);
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes = 6
let estacion;
switch (mes){
    case 1:
    case 2:
    case 12:
        estacion = "Invierno"
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Primavera"
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Invierno"
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Primavera"
        break;
    default:
            saludo = "No existe"
    }
    console.log(`mes pertenece a ${estacion}`)
// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mes = 3
let dias;
switch (mes){
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
    dias = 31
    break;
case 2:
    dias = 28
    break;   
case 4:
case 6:
case 9:
case 11:
    dias = 30
    break;  
default:
    dias = "No existe"
}
console.log(`Este mes tiene ${dias} días.`)













