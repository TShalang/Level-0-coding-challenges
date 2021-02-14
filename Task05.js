function triangleArea(num1, num2, num3) {
  var semiPerimeter = (num1 + num2 + num3) / 2;
  var area = Math.sqrt(
    semiPerimeter *
      ((semiPerimeter - num1) * (semiPerimeter - num2) * (semiPerimeter - num3))
  );

  return area;
}

console.log(triangleArea(1, 2, 3));
