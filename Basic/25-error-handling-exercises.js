/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Captura una excepción utilizando try-catch
    function dividir(dividendo, divisor) {
        try {
        if (divisor === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return dividendo / divisor;
        } catch (error) {
        console.error("Error:", error.message);
        return null;
        }
    }
    
    // Usando la función
    let resultado = dividir(10, 2);
    console.log(resultado); // Imprime 5
    
    resultado = dividir(10, 0);
    console.log(resultado); // Imprime "Error: No se puede dividir por cero" y luego null

    function pedirEdad() {
        try {
        let edad = prompt("Ingrese su edad:");
        if (isNaN(edad)) {
            throw new Error("La edad debe ser un número");
        }
        if (edad < 0) {
            throw new Error("La edad no puede ser negativa");
        }
        return edad;
        } catch (error) {
        console.error("Error:", error.message);
        return pedirEdad(); // Volvemos a pedir la edad
        }
    }
// 2. Captura una excepción utilizando try-catch y finally
    function validarFormulario() {
        try {
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
    
        if (nombre === "") {
            throw new Error("El nombre no puede estar vacío");
        }
    
        if (isNaN(edad) || edad <= 0) {
            throw new Error("La edad debe ser un número positivo");
        }
    
        console.log("Formulario válido. Nombre:", nombre, ", Edad:", edad);
        } catch (error) {
        console.error("Error:", error.message);
        alert("Error en el formulario: " + error.message);
        } finally {
        console.log("Validación de formulario finalizada");
        }
    }
// 3. Lanza una excepción genérica
    function buscarElemento(array, elemento) {
        try {
        const indice = array.indexOf(elemento);
        if (indice === -1) {
            throw new Error("Elemento no encontrado en el array");
        }
        return indice;
        } catch (error) {
        console.error("Error:", error.message);
        return null;
        }
    }
    
    // Usando la función
    const miArray = [1, 2, 3];
    
    const resultado = buscarElemento(miArray, 4);
    console.log(resultado); // Imprimirá "Error: Elemento no encontrado en el array" y luego null


    function calcularRaizCuadrada(numero) {
        try {
        if (numero < 0) {
            throw new Error("No se puede calcular la raíz cuadrada de un número negativo");
        }
        return Math.sqrt(numero);
        } catch (error) {
        console.error("Error:", error.message);
        return null;
        }
    }

    function multiplicar(multiplicando, multiplicador) {
    try {
        if (multiplicador === Infinity || multiplicador === -Infinity) {
        throw new Error("No se puede multiplicar por infinito");
        }
        return multiplicando * multiplicador;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
    }

    // Usando la función
    const resultado = multiplicar(10, Infinity);
    console.log(resultado); // Imprimirá "Error: No se puede multiplicar por infinito" y luego null

    function pedirNombre() {
        try {
        const nombre = prompt("Ingrese su nombre:");
        if (nombre === "") {
            throw new Error("Debe ingresar un nombre");
        }
        return nombre;
        } catch (error) {
        console.error("Error:", error.message);
        return pedirNombre(); // Volvemos a pedir el nombre si se produjo un error
        }
    }
    
    // Usando la función
    const nombreIngresado = pedirNombre();
    console.log("Nombre ingresado:", nombreIngresado);

// 4. Crea una excepción personalizada
    class ErrorMultiplicacionPorInfinito extends Error {
        constructor() {
        super("No se puede multiplicar por infinito");
        }
    }
    
    function multiplicar(multiplicando, multiplicador) {
        try {
        if (multiplicador === Infinity || multiplicador === -Infinity) {
            throw new ErrorMultiplicacionPorInfinito();
        }
        return multiplicando * multiplicador;
        } catch (error) {
        if (error instanceof ErrorMultiplicacionPorInfinito) {
            console.error("Error de multiplicación:", error.message);
        } else {
            console.error("Error inesperado:", error);
        }
        return null;
        }
    }


    class ErrorNombreVacio extends Error {
        constructor() {
        super("Debe ingresar un nombre");
        }
    }
    
    function pedirNombre() {
        try {
        const nombre = prompt("Ingrese su nombre:");
        if (nombre === "") {
            throw new ErrorNombreVacio();
        }
        return nombre;
        } catch (error) {
        if (error instanceof ErrorNombreVacio) {
            console.error("Error de nombre:", error.message);
        } else {
            console.error("Error inesperado:", error);
        }
        return pedirNombre();
        }
    }

  
// 5. Lanza una excepción personalizada
    try {
        const resultado = multiplicar(10, Infinity);
        console.log("Resultado:", resultado);
    } catch (error) {
        if (error instanceof ErrorMultiplicacionPorInfinito) {
        console.error("Error de multiplicación:", error.message);
        } else {
        console.error("Error inesperado:", error);
        }
    }

    try {
        const nombre = pedirNombre();
        console.log("Nombre ingresado:", nombre);
    } catch (error) {
        if (error instanceof ErrorNombreVacio) {
        console.error("Error de nombre:", error.message);
        } else {
        console.error("Error inesperado:", error);
        }
    }

// 6. Lanza varias excepciones según una lógica definida
    /*
    ¿Dónde está la clase Error en los ejemplos anteriores?

    La clase Error es una clase predefinida en JavaScript que representa 
    un error genérico. No la vemos explícitamente en nuestros ejemplos 
    porque está implícita cuando decimos extends Error. 
    Al crear una clase personalizada que extiende Error, 
    estamos creando un nuevo tipo de error que es más específico que el error genérico.
    */
    class NombreVacioError extends Error {
    constructor() {
        super("El nombre no puede estar vacío");
    }
    }

    class ContraseñaCortaError extends Error {
    constructor() {
        super("La contraseña debe tener al menos 8 caracteres");
    }
    }

    class EmailInvalidoError extends Error {
    constructor() {
        super("El formato del email no es válido");
    }
    }

    function validarFormulario(nombre, contraseña, email) {
        if (nombre === "") {
        throw new NombreVacioError();
        }
        if (contraseña.length < 8) {
        throw new ContraseñaCortaError();
        }
        // ... Validación del email ...
        if (!emailValido(email)) {
        throw new EmailInvalidoError();
        }
        // Si no hay errores, retorna true
        return true;
    }

// 7. Captura varias excepciones en un mismo try-catch
    try {
        // Código que puede lanzar diferentes tipos de excepciones
        let resultado = 10 / 0; // Dividir por cero
        let elemento = document.querySelector('#elemento-inexistente'); // Referenciar un elemento inexistente
    } catch (error) {
        if (error instanceof ReferenceError) {
        console.error("Error de referencia:", error.message);
        } else if (error instanceof TypeError) {
        console.error("Error de tipo:", error.message);
        } else {
        console.error("Error desconocido:", error);
        }
    }
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
    const valores = ['3.14', 'hola', 42, null, true];

    for (let i = 0; i < valores.length; i++) {
    try {
        const valorFloat = parseFloat(valores[i]);
        console.log(`El valor convertido a float es: ${valorFloat}`);
    } catch (error) {
        console.error(`Error al convertir '${valores[i]}' a float: ${error.message}`);
    }
    }
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
    /*
    Imagina que tienes un diccionario (en programación, lo llamamos "objeto").
     Este diccionario tiene palabras y sus significados. Lo que el código hace
      es revisar si en ese diccionario existe una palabra en específico. 
      Si la palabra está, todo bien. Pero si la palabra NO está, el código te avisa 
      con un mensaje de error personalizado, diciéndote cuál palabra no encontraste.
    */
      const miDiccionario = {
        manzana: "Fruta redonda y roja",
        perro: "Animal doméstico fiel"
      };
      
      // Intentamos encontrar la palabra "gato"
      try {
        verificarPropiedad(miDiccionario, "gato");
        console.log("La palabra existe");
      } catch (error) {
        if (error instanceof PropiedadInexistenteError) {
          console.error(error.message);
        } else {
          console.error("Otro tipo de error:", error);
        }
      }
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
    /*El ejercicio te pide que crees una función que sea capaz de repetir una acción 
    (o llamar a otra función) varias veces, incluso si esa acción falla en los primeros intentos. 
    Esta función debe tener un límite de reintentos para evitar bucles infinitos.

En resumen:

    Repetir una acción: La función debe ejecutar un código determinado.
    Manejar errores: Si la acción falla (genera un error), la función debe intentarlo de nuevo.
    Límite de reintentos: La función debe tener un contador para limitar el número de intentos a 10.*/
    function realizarIntentos(funcion, maxIntentos = 10) {
        let intentos = 0;
        while (intentos < maxIntentos) {
          try {
            funcion();
            return; // Si la función se ejecuta sin errores, salimos del bucle
          } catch (error) {
            console.error(`Error en el intento ${intentos + 1}: ${error.message}`);
            intentos++;
          }
        }
        throw new Error(`Se agotaron los ${maxIntentos} intentos`);
      }

