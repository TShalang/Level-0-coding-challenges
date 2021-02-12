
  function maxNumber(num1, num2, num3) {
    var max = 0;
    for (var i = 0; i < 2; i++) {
      if (num1 > max) 
      max = num1;
      if (num2 > max)
      max = num2;
      if (num3 > max)
      max = num3;
    }
    return max;
  }
  console.log(maxNumber(5,11,9))