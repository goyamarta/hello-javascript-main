/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades
    let libro = {
        name: "El señor de los anillos",
        precio: "37€",
        Autor: "Marta"
    }
    console.log(libro)
    console.log(typeof libro)

// 2. Accede y muestra su valor
    libro.name
    console.log(libro.name)
    libro.precio
    console.log(libro.precio)
    console.log(typeof libro.precio)
// 3. Agrega una nueva propiedad
    libro.paginas = 250
    console.log(libro)
// 4. Elimina una de las 3 primeras propiedades
    delete libro.paginas
    console.log(libro)
// 5. Agrega una función e invócala
    let libro2 = {
        name: "El señor de los anillos",
        precio: "37€",
        Autor: "Marta",
        escritor: function () {
            console.log("La persona es escritor.")
        }
    }
    libro2.escritor()

// 6. Itera las propiedades del objeto
for (let key in libro2) {
    console.log(key + ": " + libro2[key])
}
// 7. Crea un objeto anidado
let libro4 = {
    name: "El señor de los anillos",
    precio: "37€",
    Autor: "Marta",
    cuento: {
        name: "Pumuky",
        precio: "40€",
        Autor: "Natalia",    
    },
    escritor: function () {
        console.log("La persona es escritor.")
    }
}
console.log(libro4)
// 8. Accede y muestra el valor de las propiedades anidadas
    libro4.cuento.Autor
    console.log(libro4.cuento.Autor)
// 9. Comprueba si los dos objetos creados son iguales
let libro5 = {
    name: "El señor de los anillos",
    precio: "37€",
    Autor: "Marta",
    cuento: {
        name: "Pumuky",
        precio: "40€",
        Autor: "Natalia",    
    },
    escritor: function () {
        console.log("La persona es escritor.")
    }
}
console.log(libro4 == libro5)
// 10. Comprueba si dos propiedades diferentes son iguales
    console.log(libro4.Autor == libro5.Autor)