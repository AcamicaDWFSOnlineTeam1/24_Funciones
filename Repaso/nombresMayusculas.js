function nombresMayusculaConMapYArrowFunction(listaPersonas) {
    return listaPersonas.map(persona => persona.nombre.toLocaleUpperCase());
}

// El arreglo personas se encuentra declarado en el archivo personas.js
console.log('########Inicio Nombres Mayusculas########');
console.log(nombresMayusculaConMapYArrowFunction(personas));
console.log('########Fin Nombres Mayusculas########');


