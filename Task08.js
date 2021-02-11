function timeConverter(number) {
  var hours = Math.floor(number / 60);
  var minutes = number % 60;

  var hourName = "hour";
  var minuteName = "minute";

  if (hours != 1) hourName = "hours";
  if (minutes != 1) minuteName = "minutes";

  output = hours + " " + hourName + ", " + minutes + " " + minuteName;
  altOutput = minutes + " " + minuteName;
  
  if (hours < 1) 
  {
    return altOutput
  }

  return output
}

console.log(timeConverter(71));
console.log(timeConverter(121));
console.log(timeConverter(41));
