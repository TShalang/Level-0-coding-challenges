function string(string, string2) {
  var string = string.toLowerCase().split("");
  var string2 = string2.toLowerCase();
  var letters = "".toLowerCase();

  for (var i = 0; i < string2.length; i++) {
    if (string.indexOf(string2[i]) !== -1) {  //checks if value to search has occured
      letters += string2[i];
    }
  }
  
  output = "Common letters: " +  [...new Set(letters)];
  console.log(output)
}
string("TshiDi", "MatsHidiso");
