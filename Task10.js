function string(string, string2) {
  var string = string.toLowerCase();
  var string2 = string2.toLowerCase();
  var output = string.split("");
  var letters = "".toLowerCase();

  for (var i = 0; i < string2.length; i++) {
    if (output.indexOf(string2[i]) !== -1) //checks if value to search has occured
    {
        letters += string2[i];
    }
  }

  return "Common letters: " + letters.split("");
}
console.log(string("hOuse", "computErs"));
