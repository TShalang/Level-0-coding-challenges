function maxNumber(num1, num2, num3) {
    if(num1>num2 && num1>num3)
    return num1;
    if(num2>num1 && num2>num3)
    return num2;
    if(num3>num2 && num3>num1)
    return num3;
  }
  
  console.log(maxNumber(5,2,3));
  