function vowel(string) {
  var vowels = "";
  var vowelList = "aeiou";
  string = string.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (vowelList.indexOf(string[i]) != -1) {
      vowels += string[i];
    }
  }
  vowelOutput = "Vowels: " + vowels.split("");

  return vowelOutput;
}

console.log(vowel("And a hello to YOU"));
