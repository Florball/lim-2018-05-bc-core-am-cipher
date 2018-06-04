// Accediendo al DOM 
const offset = document.getElementById('displace'); // Cuadro para elegir desplazamiento de cifrado.
const offset2 = document.getElementById('displace2'); // Segundo cuadro para elegir desplazamiento de cifrado.
const cipherString = document.getElementById('cipher'); // Cuadro de texto para ingresar frase a cifrar.
const buttonEncode = document.getElementById('buttonEncode'); // Boton para cifrar.
const encryptedText = document.getElementById('encryptedText'); // Texto cifrado.
const decipherString = document.getElementById('decipher'); // Cuadro de texto para descifrar.
const buttonDecode = document.getElementById('buttonDecode'); // Boton para descifrar.
const decryptedText = document.getElementById('decryptedText'); // Texto descifrado.

// Llamando al evento, para boton cifrar y descifrar.
buttonEncode.addEventListener('click', () => {
  encryptedText.innerHTML = cipher.encode(parseInt(offset.value), cipherString.value.toUpperCase());
});
buttonDecode.addEventListener('click', () => {
  decryptedText.innerHTML = cipher.decode(parseInt(offset2.value), decipherString.value.toUpperCase());
});