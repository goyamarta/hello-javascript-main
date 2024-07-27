/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
    let nombre = "Marta"
    let apellido = "Goya"
    let identificacion = "Marta" + " Goya"
    console.log(identificacion)

// 2. Muestra la longitud de una cadena de texto
    console.log(identificacion.length)

// 3. Muestra el primer y último carácter de un string
    console.log(identificacion[0])
    console.log(identificacion[9])
// 4. Convierte a mayúsculas y minúsculas un string
    nombre = "marta"
    apellido = "goya"
    console.log(identificacion.toUpperCase()) //  hay que poner ()
    console.log(identificacion.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
    let mensaje = ` hola este
    es
    un 
    mensaje muy divertido
    `
    console.log(mensaje)
// 6. Interpola el valor de una variable en un string
    let edad = 30
    let titulo = "Juan"
    let clave = `${titulo} es la palabra clave y ${edad} es la contraseña`
    console.log(clave)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
    clave = `${titulo} es la palabra clave y ${edad} es la contraseña`
    let claveGuiones = clave.replace(/ /g, "-" )
    console.log(claveGuiones)
// 8. Comprueba si una cadena de texto contiene una palabra concreta
    clave = `${titulo} es la palabra clave y ${edad} es la contraseña`
    let claveComprobacion = clave.includes("palabra")
    console.log(claveComprobacion)
// 9. Comprueba si dos strings son iguales
    let pelicula1 = "Dos hombre y medio"
    let pelicula2 = "Sí, si si ..."
    console.log(pelicula1 == pelicula2)
// 10. Comprueba si dos strings tienen la misma longitud
    pelicula1 = "Dos hombre y medio"
    pelicula2 = "Sí, si si ..."
    console.log(pelicula1.length == pelicula2.length)
    pelicula1 = "no, no no ..."
    console.log(pelicula1.length == pelicula2.length)
















