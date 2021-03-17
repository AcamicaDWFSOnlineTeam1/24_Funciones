    /**
 * Esta fución debe calcular el total de asistentes
 * según una lista de personas.
 *
 * Se considera que una persona esta "asistente" si
 * la propiedad respectiva es distinta a null y undefined
 *
 * La función debe retornar el número de asistencias.
 */
function asistentesConFor(listaPersonas) {
    console.log('##asistentesConFor##');
    let numeroAsistentes = 0;

    for (let index = 0; index < listaPersonas.length; index += 1) {
        numeroAsistentes = getNumeroAsistentesConListaPersonas(listaPersonas, index, numeroAsistentes);
    }

    return numeroAsistentes;
}

function asistentesConWhile(listaPersonas) {
    console.log('##asistentesConWhile##');
    let numeroAsistentes = 0;
    let index = 0;

    while (index < listaPersonas.length) {
        numeroAsistentes = getNumeroAsistentesConListaPersonas(listaPersonas, index, numeroAsistentes);
        index += 1;
    }

    return numeroAsistentes;
}

function asistentesConDoWhile(listaPersonas) {
    console.log('##asistentesConDoWhile##');
    let numeroAsistentes = 0;
    let index = 0;

    do {
        numeroAsistentes = getNumeroAsistentesConListaPersonas(listaPersonas, index, numeroAsistentes);
        index += 1;
    } while (index < listaPersonas.length);

    return numeroAsistentes;
}

function asistentesConForEach(listaPersonas) {
    console.log('##asistentesConForEach##');
    let numeroAsistentes = 0;
    listaPersonas.forEach(persona => {
        numeroAsistentes = getNumeroAsistentesConPersona(persona, numeroAsistentes);
    });

    return numeroAsistentes;
}


function asistentesConArrowFunction(listaPersonas) {
    console.log('##asistentesConArrowFunction##');
    let numeroAsistentes = listaPersonas => {
        return asistentesConForEach(listaPersonas);
    };
    return numeroAsistentes(listaPersonas);
}

function asistentesConArrowFunctionSinPalabraReturn(listaPersonas) {
    console.log('##asistentesConArrowFunctionSinPalabraReturn##');
    let asistentes = personas => asistentesConForEach(personas);
    return asistentes(listaPersonas);
}

function asistentesConArrowFunctionYFilter(listaPersonas) {
    console.log('##asistentesConArrowFunctionYFilter##');
    return listaPersonas.filter(persona => persona.asistente).length;
}

function getNumeroAsistentesConListaPersonas(listaPersonas, index, numeroAsistentes) {
    if (listaPersonas[index].asistente) {
        console.info(listaPersonas[index]);
        numeroAsistentes += 1;
    }
    return numeroAsistentes;
}

function getNumeroAsistentesConPersona(persona, numeroAsistentes) {
    if (persona.asistente) {
        console.info(persona);
        numeroAsistentes += 1;
    }
    return numeroAsistentes;
}

/**
 * La implementación debe ser:
 *
 * let totalAsistentes = asistentes(personas);
 * console.log(totalAsistentes); // debe ser 3
 */
// El arreglo personas se encuentra declarado en el archivo personas.js
console.info('########Inicio Número Asistentes########');
console.log('asistentesConFor: ' + asistentesConFor(personas));
console.log('asistentesConWhile: ' + asistentesConWhile(personas));
console.log('asistentesConDoWhile: ' + asistentesConDoWhile(personas));
console.log('asistentesConForEach: ' + asistentesConForEach(personas));
console.log('asistentesConArrowFunction: ' + asistentesConArrowFunction(personas));
console.log('asistentesConArrowFunctionSinPalabraReturn: ' + asistentesConArrowFunctionSinPalabraReturn(personas));
console.log('asistentesConArrowFunction: ' + asistentesConArrowFunctionYFilter(personas));
console.info('########Fin Número Asistentes########');


