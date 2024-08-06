/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales
    let myAnimalArray = ["perro", "gato","pato","mirlo","sapo"]
    console.log(myAnimalArray)
// 2. Añade dos más. Uno al principio y otro al final
    myAnimalArray.push("buho")
    myAnimalArray.unshift("lagartija")
    console.log(myAnimalArray)
// 3. Elimina el que se encuentra en tercera posición
    myAnimalArray.splice(2,1)
    console.log(myAnimalArray)  
// 4. Crea un set que almacene cinco libros
    let mySetLibros = new Set(["libro 1", "libro 2", "libro 3", "libro 4", "libro 5"])
    console.log(mySetLibros)
// 5. Añade dos más. Uno de ellos repetido
    mySetLibros.add("Libro 6","Libro 3")
    console.log(mySetLibros)
// 6. Elimina uno concreto a tu elección
    mySetLibros.delete("libro 1")
    console.log(mySetLibros)
// 7. Crea un mapa que asocie el número del mes a su nombre
    let myMapMes = new Map([
        [1, "Enero"],
        [2, "Febrero"],
        [3, "Marzo"],
        [4, "Abril"],
        [5, "Mayo"],
        [6, "Junio"],
        [7, "Julio"],
        [8, "Agosto"],
        [9, "Septiembre"],
        [10, "Octubre"],
        [11, "Noviembre"],
        [12, "Diciembre"],  

    ]);
    console.log(myMapMes)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    console.log(myMapMes.has(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
    myMapMes = new Map([
        [1, "Enero"],
        [2, "Febrero"],
        [3, "Marzo"],
        [4, "Abril"],
        [5, "Mayo"],
        [6, "Junio"],
        [7, "Julio"],
        [8, "Agosto"],
        [9, "Septiembre"],
        [10, "Octubre"],
        [11, "Noviembre"],
        [12, "Diciembre"],  
        [13, ["Junio", "Julio", "Agosto"]]
    ]);
    console.log(myMapMes)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
    let myArrayLocura = ["gozo", "pozo", "loco"]
    console.log(myArrayLocura)

    mySetLocura = new Set(myArrayLocura)
    console.log(mySetLocura)

    let myMapLocura = new Map ([
        ["valor 1", "tristeza"],
        ["valor 2", "Ira"],
        ["valor 3", [mySetLocura]]
    ])
    console.log(myMapLocura)