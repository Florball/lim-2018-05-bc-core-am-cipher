// Pide nombre a usuario y devuelve el nombre con la inicial mayuscula.
let name = prompt('¡Hola! \n ¿Cuál es tu nombre?'); 
name = name.charAt(0).toUpperCase() + name.slice(1);

// Muestra un saludo en pantalla con el nombre del usuario.
let welcomeName = document.getElementById('welcome');
welcomeName.innerHTML = '¡Bienvenido(a) ' + name + '!';

