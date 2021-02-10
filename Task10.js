function string(string, string2) {
  var output = string.split("");
  var letters = "";

  for (var i = 0; i < string2.length; i++) {
    if (output.indexOf(string2[i]) !== -1) //checks if value to search has occured
    {
        letters += string2[i];
    }
  }

  return "Common letters: " + letters.split("");
}
console.log(string("house", "computers"));
