// console.log(sum(2, 2));
//console.log(NAME);
//console.log(info);
//console.log(city);
//console.log(multiplicacion(3, 2));


// function sum(a, b) {
//     return a + b;
// }

// const NAME = "Juan Perez";

// let info = {
//     age: 29,
//     nationality: 'México'
// };

// var city = "Ciudad de México";



// let arregloNumeros = [1, 2, 3];


// let suma = (arregloDeNumeros) => {
//     let suma = 0;
//     for (let index = 0; index < arregloDeNumeros.length; index += 1) {
//         suma = suma + arregloDeNumeros[index];
//     }
//     return suma;
// };

// console.log(suma(arregloNumeros));




// Dudas de getters y setters
class Car {

    #defprivateProperty;    // Con # marcamos la propiedad como privada
    #otherPrivateProperty;  // no se puede acceder directamente a esta propiedad

    constructor(color, make, year, engine, doorNumber) {
        this.defColor = color;
        this.defmake = make;
        this.year = year;
        this.engine = engine;
        this.doorNumber = doorNumber;
    }

    // myCar.color;
    /* Accessor properties (getters) */

    // Getters con la palabra get
    // Definir el getter con la palabra get
    // la propiedad de la clase no puede tener
    // el mismo nombre que el getter
    get color() {
        return this.defcolor;
    }

    getColor() {
        return this.defcolor;
    }

    get make() {
        return this.defmake;
    }

    get privateProperty() {
        return this.#defprivateProperty;
    }

    // Getter sin la palabra get
    getYear() {
        return this.year;
    }

    getEngine() {
        return this.engine;
    }

    getOtherPrivateProperty() {
        return this.#otherPrivateProperty;
    }
    /* Accessor properties (setters) */

    // Setters con la palabra set
    // Definir el setter con la palabra set
    // la propiedad de la clase no puede tener
    // el mismo nombre que el setter
    set color(newColor) {
        this.defcolor = newColor;
    }

    set make(newMake) {
        this.defmake = newMake;
    }

    set privateProperty(privateProperty) {
        this.#defprivateProperty = privateProperty;
    }

    setColor (color) {
        this.refColor = color;
    }
    // Setter sin la palabras set
    setYear(year) {
        this.year = year;
    }

    setEngine(engine) {
        this.engine = engine;
    }

    setOtherPrivateProperty(otherPrivateProperty) {
        this.#otherPrivateProperty = otherPrivateProperty;
    }
}

let myCar = new Car("Blue", "Toyota", 2000, "v1");
console.table(myCar);

// Uso de getters y setters definidos con las palabras
// reservadas get y set
//console.log('Color del carro:' + myCar.defcolor);  // 
console.log('Color del carro:' + myCar.getColor());  // -> getColor()
console.log('Color del carro:' + myCar.color);  // -> get color()

console.log('Marca carro: ' + myCar.make); // -> get make()

myCar.color = "Red";
myCar.make = "Nissan";
console.info("Color: ", myCar.color);
console.info("Make: ", myCar.make);
console.table(myCar);

// Uso de getters y setters definidos sin las palabras
// reservadas get y set
console.info("Engine: ", myCar.getEngine());
console.info("Make: ", myCar.getYear());
myCar.setEngine("v2");
myCar.setYear(2020);
console.table(myCar);

// Las siguientes 2 líneas marcan error, quitar los comentarios para ver los errores
//myCar.#defprivateProperty = 1;
//console.log("Propiedad privada: ", myCar.#defprivateProperty);

// Uso de setters
myCar.privateProperty = 1;
myCar.setOtherPrivateProperty(2);
console.table(myCar);

// Uso de getters
console.log("PrivateProperty: ", myCar.privateProperty);
console.log("OtherPrivateProperty: ", myCar.getOtherPrivateProperty());

















let multiplicacion = function (a, b) {
    return a * b;
};