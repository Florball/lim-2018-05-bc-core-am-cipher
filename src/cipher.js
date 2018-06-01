window.cipher = {
  encode: (offset, string) => {
    // console.log('hola');
    let encryption = '';
    for (let index = 0; index < string.length; index++) {
      let position = string.charCodeAt(index);
      if (position >= 65 && position <= 90) {
        let value = (position - 65 + offset) % 26 + 65;
        encryption += String.fromCharCode(value);
      } else if (position == 32) {
        encryption += " ";
      }
    }
    return (encryption);
  },
  decode: (offset, string) => {
    let decrypted = '';
    for (let index = 0; index < string.length; index++) {
      let position = string.charCodeAt(index);
      if (position >= 65 && position <= 90) {
        let value = (position - 90 - offset) % 26 + 90;
        decrypted += String.fromCharCode(value);
      } else if (position == 32) {
        decrypted += " ";
      }
    }
    return (decrypted);
  }
}