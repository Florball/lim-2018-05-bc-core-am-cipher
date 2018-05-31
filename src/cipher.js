window.cipher = {
  encode: (offset, string) => {
    // console.log('hola');
    let encryption = '';
    let position = '';
    for (let index = 0; index < string.length; index++) {
      position = string.charCodeAt(index);
      if ((position >= 65 && position <= 90) || (position >= 97 && position <= 122)) {
        encryption = (position - 90 + offset) % 26 + 90 || (position - 122 + offset) % 26 + 122;
        encryption += String.fromCharCode(position);

      }
      decode: (offset, string) => {
        console.log('chau')
      }
    }
    return(encryption);
  } 
}