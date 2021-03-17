// 4 tipos de función realizando lo mismo
function double(x) {
    return 2 * x;
}

console.log("double: ", double(4));

let double2 = function double3(x) {
    return 2 * x;
}; 

console.log("double2: ", double2(2));
//console.log("double3: ", double3(5));

let double4 = function (x) {
    return 2 * x;
};

console.log("double4: ", double4(3));

let double5 = x => 2 * x;

console.log("double5:", double5(2));

// La función se ejecuta automáticamente
let double6 = (function (w) {
    //console.log("Double6: " + 2 * x);
    //return 2 * x;
    console.log(w);
})(window);

//console.log("Double6: ", double6);


// Scope Ejemplo 1
let scope = "Soy global";

function testScope() {
    let scope = "Soy local";
    console.log("Adentro de la función: " + scope);
}

testScope();

console.log("Afuera de la función: " + scope);

// Scope Ejemplo 2
let scope2 = "Soy global";

function testScope2() {
    scope2 = "Soy local";

    console.log("Adentro de la segunda función: " + scope2);
}

console.log("Afuera de la segunda función: " + scope2);

testScope2();

// Scope ejemplo 3 
// Hosting declaración scope 3, da error - descomentar para mostrar ejemplo
// let scope3 = "Soy global";

// function testScope3() {
//     console.log ("Adentro de la tercera función: " + scope3);     
//     let scope3 = "Soy local";
// }

// testScope3(); 

// console.log("Afuera de la tercera función: " + scope3);
// Se reasigna el valor de scope2 tras ejecutar la función
console.log("Afuera de la segunda función: " + scope2);



// try / catch
const secretNum = 25;
let guessNum = 3;
let win = 0;

// Para jugarlo comentar la linea "let guess = 3;" y la última línea del código 
// y descomentar el siguiente comentario
/*do{
    let guess = prompt("Adivine el número");
    guessTheNum(secretNum, guess);
}while( win === 0);*/

function guessTheNum(secret, guess) {
    try {
        if (isNaN(guess)) {
            throw new Error("No fue un número lo que se ingresó");
        } else if (guess == '') {
            throw new Error("No se ingresó un número");
        } else if (guess > secret) {
            throw new Error("El número ingresado es muy alto");
        } else if (guess < secret) {
            throw new Error("El número ingresado es muy bajo");
        }
        win = 1;
        alert("Correcto, el número era: " + secret);
    } catch (error) {
        console.error(error);
    }
}

//guessTheNum('hola', 3);




try {
    console.info('Start try');  // (1) 
    // ... No errores
    console.info('End try');   // (2)
} catch (exception) {
    console.error('Catch es ignorado, no se presentaron errores'); // (3)
}

//  Muestra el log 1 y 2














try {
    console.info('Start try');  // (1)
    lalala; // error, variable no defina!
    console.info('End try (nunca se ejecuta)');  // (2)
} catch (err) {
    console.error('Ocurrió un error!'); // (3)
    console.error(err.name); // ReferenceError
    console.error(err.message); // lalala is not defined
    console.error(err.stack); // ReferenceError: lalala is not defined
}

// Muestra el log 1 y 3s