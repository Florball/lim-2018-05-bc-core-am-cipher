window.cipher = {
  encode: (offset, string) => {
    // console.log('hola');
    let encryption = '';
    let position = '';
    for (let index = 0; index < string.length; index++) {
      position = string.charCodeAt(index);
      if ((position >= 65 && position <= 90) || (position >= 97 && position <= 122)) {
        let letter = (position - 90 + offset) % 26 + 90 || (position - 122 + offset) % 26 + 122;
        encryption += String.fromCharCode(letter);
      }
    }
    return (encryption);
  },
  decode: (offset, string) => {
    let decrypted = '';
    let position = '';
    for (let index = 0; index < string.length; index++) {
      position = string.charCodeAt(index);
      if ((position >= 65 && position <= 90) || (position >= 97 && position <= 122)) {
        let letter = (position - 90 - offset) % 26 + 90 || (position - 122 - offset) % 26 + 122;
        decrypted += String.fromCharCode(letter);
      }
    }
    return(decrypted);
  }
}