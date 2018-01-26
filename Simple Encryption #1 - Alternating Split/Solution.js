function encrypt(text, n) {
  if (!n)
    return text;
  while (n) {
    var a = "";
    var b = "";
    for (var i = 0; i < text.length; i++) {
      if (i%2) {
        a += text[i];
      }
      else
        b += text[i];
    }
    text = a+b;
    n--;
  }
  return text;
}

function decrypt(encryptedText, n) {
  // code here
}
