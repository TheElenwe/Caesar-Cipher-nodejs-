//A Javascript Program to illustrate Caesar Cipher Technique

// Encrypts text using a shift od s
const readlineSync = require("readline-sync");

function encrypt(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text.charCodeAt(i);

    if (char >= 65 && char <= 90) {
      result += String.fromCharCode(((char - 65 + shift) % 26) + 65);
    } else if (char >= 97 && char <= 122) {
      result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

// Driver code
text = readlineSync.question("give number:");
shift = Number(readlineSync.question("dwse: "));
console.log(encrypt(text, shift));
