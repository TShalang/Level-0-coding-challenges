function evenOrOdd(num) {
  number = num % 2; //Check if the number is divisible by 2
  if (number == 0) {
    return "even";
  } else return "odd";
}

console.log(evenOrOdd(8));
