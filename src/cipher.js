// Objeto con funciones para cifrar y descifrar
window.cipher = {
  encode: (offset, string) => { // Funcion para cifrar
    let encryption = ''; //Declarando un acumulador para el texto  
    for (let index = 0; index < string.length; index++) { // Ciclo repetitivo para recorrer el texto a cifrar
      let position = string.charCodeAt(index); // Declarando una variable que guardará el codigo Ascii
      if (position >= 65 && position <= 90) { // Ciclo condicional para que reconozca las mayusculas
        let value = (position - 65 + offset) % 26 + 65; // Variable con la formula del cifrado Cesar
        encryption += String.fromCharCode(value); // Variable reasignada, retornandole el valor de letra.
      } // else if (position == 32) { // Condicional, si es igual a 32 en codigo ascii
        //encryption += " "; // Es igual a espacio
      //}
    }
    return (encryption); // Retornando el valor
  },
  decode: (offset, string) => { // Funcion para deecifrar.
    let decrypted = ''; // //Declarando un acumulador para el texto
    for (let index = 0; index < string.length; index++) { // Ciclo repetitivo para recorrer el texto a decifrar
      let position = string.charCodeAt(index); // Declarando una variable que guardará el codigo Ascii
      if (position >= 65 && position <= 90) { // Ciclo condicional para que reconozca las mayusculas
        let value = (position - 90 - offset) % 26 + 90; // Variable con la formula del cifrado Cesar
        decrypted += String.fromCharCode(value); // Variable reasignada, retornandole el valor de letra.
      } // else if (position == 32) { // Condicional, si es igual a 32 en codigo ascii
       // decrypted += " "; // Es igual a espacio
      //}
    }
    return (decrypted); // Retornando el valor
  }
}