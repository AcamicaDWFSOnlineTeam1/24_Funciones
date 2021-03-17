let usuarios = ['usuario1', 'usaurio2', 'usuario3', 'asdfasf'];
let usuario = prompt('Ingresa tu nombre de usuario: ');

//  try {
//     for (let index = 0; index < usuarios.length; index += 1) {
//         if (usuario == usuarios[index]) {
//             throw new Error('Usuario en uso');
//         } 
//     }
//         usuarios.push(usuario);
//         console.log('Bienvenido ' + usuario);
    
// } catch (exception) {
//     console.error('Ocurrió un error');
//     console.error(exception);
// }


(function addUser() {
    //input usuario 
    let newUsername = prompt("Ingrese un nuevo nombre de usuario");
    //manejo de errores
    try {
        //throw new Error si username vacío
        if (!newUsername) {
            throw new Error("Información incompleta, no se ingresó un username");
        }
        //throw new Error si username repetido
        for (let i = 0; i < users.length; i++) {
            if (newUsername === users[i]) {
                throw new Error("Usuario ya existente");
            }
        }
        //agregar usuario nuevo al array
        users.push(newUsername);
        alert(`Bienvenido ${newUsername}!`);
        //observar que si no hay error se agrega al array
        console.log(users);
    } catch (error) {
        alert(error);
        //observar que si hay un error no se agrega
        console.log(users);
    }
})();