/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length

console.log(myArray.length)

// clear  // limpiar

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice 

// El método slice se utiliza para crear una nueva 
// copia de una sección de un array, especificando las posiciones 
// de inicio y fin para la extracción.
// Por ejemplo, al llamar a arr.slice(1, 3), se 
// crearía un nuevo array con los elementos en las posiciones 1 y 2 
// de arr, sin modificar el array original.

// slice(1, 3): El número 1 indica el índice 1, y el 3 indica el índice 3, 
//el cual es excluido de la copia. 


myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray) // Array [ "Moure", "mouredev" ]

// splice

// Por otro lado, el método splice se utiliza para modificar el 
// contenido de un array al eliminar, reemplazar o agregar elementos, 
// especificando la posición de inicio y la cantidad de elementos a afectar.
// Por ejemplo, al llamar a arr.splice(1, 2, "nuevo"), se eliminarían
//  2 elementos a partir de la posición 1 en arr y se reemplazarían 
//  por el elemento "nuevo", modificando el array original.

//  myArray.splice(1, 3): 
// El número 1 indica el elemento en el índice 1 del array, 
// y el 3 indica el número de elementos que se deben eliminar
//  a partir del índice 1, inclusive. 

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)