// Accediendo al DOM para el cifrado y decifrado.
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

// Accediendo al DOM y añadiendo una funcion para usar Tabs.
document.getElementById('cipherCesar').addEventListener('click', () => {
  document.getElementById('module1').style.display = 'block';
  document.getElementById('module2').style.display = 'none';
  document.getElementById('module3').style.display = 'none';

});

document.getElementById('code').addEventListener('click', () => {
  document.getElementById('module2').style.display = 'block';
  document.getElementById('module1').style.display = 'none';
  document.getElementById('module3').style.display = 'none';

});

document.getElementById('decode').addEventListener('click', () => {
  document.getElementById('module3').style.display = 'block';
  document.getElementById('module1').style.display = 'none';
  document.getElementById('module2').style.display = 'none';

});

