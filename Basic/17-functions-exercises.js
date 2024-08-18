/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
    function suma(a, b){
        return a + b;
    }
    let result = suma(5, 10)
    console.log(result)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
    /*opcion 1
        function encontrarMayor(numeros) {
            let mayor = numeros[0];
            for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }
            }
            return mayor;
        }
        const miArreglo = [3, 7, 2, 9, 5];
        const numeroMayor = encontrarMayor(miArreglo);
        console.log(numeroMayor); // Imprimirá 9
    */
   // Declaración de variables fuera de la función
    const miArreglo = [3, 7, 2, 9, 5];
    let numeroMayor; //     let numeroMayor = 0;


    // Definición de la función
    function encontrarMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
        mayor = numeros[i];
        }
    }
    return mayor;
    }

    // Llamada a la función y asignación del resultado
    numeroMayor = encontrarMayor(miArreglo);
    console.log(numeroMayor); // Imprimirá 9   
      
      

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
    let myString = "Esta es mi cancion favorita";
    let totalVocales = 0;

    function encontrarVocales(cadena) {
        const vocales = "aeiouAEIOU";
        let contador = 0;
        
        for (let i = 0; i < cadena.length; i++) {
            if (vocales.includes(cadena[i])) {
                contador++;
            }
        }
        
        return contador;
    }

    totalVocales = encontrarVocales(myString);
    console.log(totalVocales);


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
    
    function convertirAMayusculas(arrayStrings) {
        // Creamos un nuevo arreglo vacío para almacenar los resultados
        const arrayMayusculas = [];
    
        // Iteramos sobre cada elemento del arreglo original
        for (let i = 0; i < arrayStrings.length; i++) {
        // Convertimos el elemento actual a mayúsculas y lo agregamos al nuevo arreglo
        arrayMayusculas.push(arrayStrings[i].toUpperCase());
        }
    
        // Devolvemos el nuevo arreglo con las strings en mayúsculas
        return arrayMayusculas;
    }
    
    // Ejemplo de uso:
    let myArray = ["esta frase es minuscula"];
    let arrayMayusculas = convertirAMayusculas(myArray);
    console.log(arrayMayusculas); // Imprimirá: ['ESTA FRASE ES MINUSCULA']
  

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
    let myNumero = (4)
    let numeroPrimo = 0;
    
        function esPrimo(numero) {
            // Los números menores o iguales a 1 no son primos
            if (numero <= 1) {
              return false;
            }
          
            // Iteramos desde 2 hasta la raíz cuadrada del número
            for (let i = 2; i <= Math.sqrt(numero); i++) {
              // Si el número es divisible por i, no es primo
              if (numero % i === 0) {
                return false;
              }
            }
          
            // Si no encontramos ningún divisor, el número es primo
            return true;
          }

    numeroPrimo = esPrimo(myNumero)
    console.log(numeroPrimo)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function encontrarElementosComunes(array1, array2) {
    // Convertimos el primer array a un Set para una búsqueda eficiente
    const conjunto1 = new Set(array1);
  
    // Creamos un nuevo array para almacenar los elementos comunes
    const elementosComunes = [];
  
    // Iteramos sobre los elementos del segundo array
    for (const elemento of array2) {
      // Si el elemento está en el conjunto del primer array, lo agregamos a los comunes
      if (conjunto1.has(elemento)) {
        elementosComunes.push(elemento);
      }
    }
  
    return elementosComunes;
  }
  
  // Ejemplo de uso:
  const array1 = [1, 3, 5, 7, 9];
  const array2 = [2, 4, 6, 8, 10, 3, 7];
  
  const resultado = encontrarElementosComunes(array1, array2);
  console.log(resultado); // Imprimirá: [3, 7]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumarPares(numeros) {
    let sumaPares = 0;
  
    for (let numero of numeros) {
      if (numero % 2 === 0) {
        sumaPares += numero;
      }
    }
  
    return sumaPares;
  }
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
  const resultado7 = sumarPares(numeros);
  console.log(resultado7); // Imprimirá 20 (2 + 4 + 6 + 8)
    
// opcion 2
// function sumarPares(numeros) {
//     let sumaPares = 0;
  
//     for (let i = 0; i < numeros.length; i++) { 
//       if (numeros[i] % 2 === 0) {
//         sumaPares += numeros[i];
//       }
//     }
  
//     return sumaPares;
//   }
//   const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
//   const resultado7 = sumarPares(numeros);
//   console.log(resultado7);


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarAlCuadrado(numeros) {
    // Creamos un nuevo array para almacenar los resultados
    const cuadrados = [];
  
    // Iteramos sobre cada número del array original
    for (let numero of numeros8) {
      // Elevamos al cuadrado el número y lo agregamos al nuevo array
      cuadrados.push(numero * numero);
    }
  
    // Devolvemos el array con los cuadrados
    return cuadrados;
  }
  
  // Ejemplo de uso:
  const numeros8 = [1, 2, 3, 4, 5];
  const resultado8 = elevarAlCuadrado(numeros8);
  console.log(resultado8); // Imprimirá [1, 4, 9, 16, 25]
  



// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(cadena) {
    // Dividimos la cadena en un array de palabras
    const palabras = cadena.split(' ');
  
    // Invertimos el orden del array de palabras
    palabras.reverse();
  
    // Unimos las palabras invertidas en una nueva cadena
    const cadenaInvertida = palabras.join(' ');
  
    return cadenaInvertida;
  }
  
  // Ejemplo de uso:
  const frase = "Hola mundo, ¿cómo estás?";
  const fraseInvertida = invertirPalabras(frase);
  console.log(fraseInvertida); // Imprimirá: "¿estás cómo mundo, Hola"
  
// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero) {
  // Caso base: el factorial de 0 y 1 es 1
  if (numero === 0 || numero === 1) {
    return 1;
  }

  // Caso recursivo: el factorial de un número es n * factorial(n-1)
  return numero * factorial(numero - 1);
}

// Ejemplo de uso:
const resultado10 = factorial(5);
console.log(resultado10); // Imprimirá 120 (5 * 4 * 3 * 2 * 1)





