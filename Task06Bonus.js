function maxNumber() {
  var max = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) 
    max = arguments[i];
  }
  return max;
}

console.log(maxNumber(3, 40, 22, 10, 20, 88, 30));
