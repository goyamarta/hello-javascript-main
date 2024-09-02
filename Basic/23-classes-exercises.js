/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 4. Añade un método estático a la primera clase

class Animal {
    constructor(nombre, raza){
        this.nombre = nombre
        this.raza = raza
    }
    sonido(){
        console.log("hace ruido")
    }
    static sum(a, b) {
        return a + b
    }

}

// 3. Muestra los valores de las propiedades e invoca a la función

let perro = new Animal("As", "pastor vasco")
console.log(perro)
perro.sonido()

// 5. Haz uso del método estático
console.log(Animal.sum(4,8))

// 6. Crea una clase que haga uso de herencia
class Gato extends Animal {
    constructor(peso, pais){
        this.peso = peso
        this.pais = pais
    }

}

// 7. Crea una clase que haga uso de getters y setters

class Usuario {
    #usuario
    #alias
    #bank

    constructor(usuario, alias, bank){
    this.#usuario = usuario
    this.#alias = alias
    this.#bank = bank
    }

    get usuario() {
        return this.#usuario
    }
    get alias() {
        return this.#alias
    }
    set bank(bank) {
        this.#bank = bank
    }
}
cliente = new Usuario("MARTA", "RAS", "IBAN3984Q0W97")
console.log(cliente)


// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores

console.log(cliente.usuario)
console.log(cliente.alias)
cliente.bank = IBANnuevo
console.log(cliente.bank)

// 10. Sobrescribe un método de una clase que utilice herencia 