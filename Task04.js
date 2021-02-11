function evenOrOdd(num) {
  number = num % 2; //Check if the number is divisible by 2
  text = "";
  if (number == 0) {
    text = "even";
  } else {
    text = "odd";
  }
  return text;
}

console.log(evenOrOdd(8));
