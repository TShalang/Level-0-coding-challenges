function convertToF(celsius) {
  f = (celsius * 1.8 + 32).toFixed(2); //Formula to change Fahrenheit to Celsius

  return f;
}

function convertToC(fahrenheit) {
  c = ((fahrenheit - 32) * 0.5556).toFixed(2); //Formula to change Celsius to Fahrenheit
  return c;
}

console.log(convertToF(37));
console.log(convertToC(350));
