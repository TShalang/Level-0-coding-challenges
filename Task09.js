function vowel(string) {
  var vowels = "";
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (
      string[i] == "a" ||
      string[i] == "e" ||
      string[i] == "i" ||
      string[i] == "o" ||
      string[i] == "u"
    ) {
      vowels += string[i];
      
    }
  
  }
  return "Vowels: " + vowels.split('');
}

console.log(vowel("And a hello to YOU"));
