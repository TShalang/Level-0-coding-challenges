function timeConverter(number) {
  var hours = Math.floor(number / 60);
  var minutes = number % 60;

  var hourName = "hour";
  var minuteName = "minute";

  if (hours != 1) hourName = "hours";
  if (minutes != 1) minuteName = "minutes";

  if (hours < 1) 
  {
    return minutes + " " + minuteName;
  }

  return hours + " " + hourName + ", " + minutes + " " + minuteName;
}

console.log(timeConverter(71));
console.log(timeConverter(121));
console.log(timeConverter(41));
