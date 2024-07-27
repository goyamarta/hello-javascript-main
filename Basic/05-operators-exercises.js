/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
        
        let a = 5
        let b = 10
        // suma
        let suma = a + b 
        console.log(suma)
        // resta
        resta = a - b 
        console.log(resta)       
        // multiplicacion
        multiplicacion = a * b 
        console.log(multiplicacion)
        // división
        division = a / b 
        console.log(division)
        // resto
        resto = a % b 
        console.log(resto)
        // exponencial
        exponencial = a ** b 
        console.log(exponencial)
        // incremento
        a++
        console.log(a)
        // decremento
        b--
        console.log(b)      
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
        let variableZ = 5
        console.log(variableZ)
        variableZ += 5
        console.log(variableZ)

        let variableC = 5
        console.log(variableC)
        variableC -= 5
        console.log(variableC)

        let variableP = 5
        console.log(variableP)
        variableP *= 5
        console.log(variableP)

        let variableO = 5
        console.log(variableO)
        variableO /= 5
        console.log(variableO)

        let variableM = 5
        console.log(variableM)
        variableM %= 5
        console.log(variableM)

        let variableS = 5
        console.log(variableS)
        variableS **= 5
        console.log(variableS)
// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
        let v = 5
        let g = 5
        console.log(v == g)

        v = 5
        g = "5"
        console.log(v == g)

        v = 5
        g = 10
        console.log(v < g)

        v = 5
        g = 10
        console.log(v != g)

        v = 5
        g = 5
        console.log(v <= g)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

        v = 5
        g = "5"
        console.log(v === g)

        v = 5
        g = 10
        console.log(v > g)

        v = 5
        g = 5
        console.log(v != g)

        v = 5
        g = 6
        console.log(v >= g)

        v = 5
        g = "sol"
        console.log(v == g)

// 5. Utiliza el operador lógico and
        console.log(7 > 10 && 10 > 20)
// 6. Utiliza el operador lógico or
        console.log(7 > 10 || 10 > 20)
// 7. Combina ambos operadores lógicos
        console.log(7 > 10 && 10 > 20 || 10 > 20)
// 8. Añade alguna negación
        let esVerdadero = true;
        let esNegacion = !esVerdadero;  // El valor de esNegacion será false
        console.log(!true)
        console.log(!false)
        console.log(!(5 > 10 && 15 > 20))
        console.log(!(5 > 10 || 15 > 20))
// 9. Utiliza el operador ternario
        let dinero = 5000
        let viaje = (dinero >= 1000) ? "me voy de vacaciones" : "me quedo en casa"
        console.log(viaje)
// 10. Combina operadores aritméticos, de comparáción y lógicas
// Operadores aritméticos
        let a = 10;
        let b = 5;
        let suma = a + b;  // La variable suma contendrá el valor 15
        let resta = a - b;  // La variable resta contendrá el valor 5

        // Operadores de comparación
        let esMayor = a > b;  // La variable esMayor contendrá el valor true
        let esIgual = a === b;  // La variable esIgual contendrá el valor false

        // Operadores lógicos
        let condicion1 = (a > 5) && (b < 10);  // La variable condicion1 contendrá el valor true
        let condicion2 = (a > 12) || (b < 3);  // La variable condicion2 contendrá el valor false
