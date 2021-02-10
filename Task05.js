function triangleArea(num1, num2, num3) {
  var s = (num1 + num2 + num3) / 2; //Semiperimeter of a triangle
  var area = Math.sqrt(s * ((s - num1) * (s - num2) * (s - num3)));

  if (num1 > num2 + num3 || num2 > num1 + num3 || num3 > num2 + num1) {
    return "The numbers entered do not make a triangle.";
  } 
  else return area;
}

console.log(triangleArea(5, 10, 3));
