
function mostrarListaPersonasConForeEachYArrowFunction(listaPersonas) {
    listaPersonas.forEach(p => console.log(p));    
}

// El arreglo personas se encuentra declarado en el archivo personas.js
console.log('########Inicio Mostrar########');
mostrarListaPersonasConForeEachYArrowFunction(personas);
console.log('########Fin Mostrar########');