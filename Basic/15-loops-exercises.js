/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
    for (let i=1; i<=20; i++){
    console.log( `Número ${i}`)
    }
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
    suma += i;
    }
    console.log("La suma de los números del 1 al 100 es:", suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
    for (let i = 2; i <= 50; i += 2) {
        console.log(i);
    }
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
          console.log(i);
        }
      }
      
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
    let myAnimalArray = ["perro", "gato","pato","mirlo","sapo"]
    for (let i=0; i<myAnimalArray.length; i++){
        console.log(myAnimalArray[i])
    }
    for (let valor of myAnimalArray) {
        console.log(valor)
    }
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let cadena = "voy a contar mis vocales!";
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
        contador++;
    }
    }

    console.log("El número de vocales es:", contador);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

    let myArrayMultiplicacion = [3, 4, 5, 10];
    let multiplicacion = 1; // Inicializamos en 1 para evitar multiplicar por 0

    for (let i = 0; i < myArrayMultiplicacion.length; i++) {
    multiplicacion *= myArrayMultiplicacion[i]; // Multiplicamos por el elemento actual
    }

    console.log("La multiplicación de los números es:", multiplicacion);


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
    for (let i = 1; i <= 10; i++) {
        console.log("5 x " + i + " = " + (5 * i));
    }
    
// 8. Usa un bucle para invertir una cadena de texto
    let cadenaFrase = "Hola mundo";
    let cadenaInvertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    console.log(cadenaInvertida); // Imprimirá "odnum aloH"

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
    let a = 0; // Bloque A
    let b = 1; // Bloque B

    console.log(a); // Imprimimos el primer número
    console.log(b); // Imprimimos el segundo número

    // Repetimos 8 veces más para tener 10 números
    for (let i = 0; i < 8; i++) {
    let c = a + b; // Sumamos A y B, guardamos en C
    console.log(c); // Imprimimos el nuevo número
    a = b; // Movemos el valor de B a A
    b = c; // Movemos el valor de C a B
    }

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
        // Array original (puedes cambiarlo por cualquier otro)
    const numeros = [3, 7, 12, 5, 9, 15, 2];

    // Array vacío para almacenar los números mayores a 10
    const numerosMayores = [];

    // Recorremos cada número del array original
    for (let i = 0; i < numeros.length; i++) {
    // Si el número es mayor a 10, lo agregamos al nuevo array
    if (numeros[i] > 10) {
        numerosMayores.push(numeros[i]);
    }
    }

    console.log(numerosMayores); // Imprimirá [12, 15]




