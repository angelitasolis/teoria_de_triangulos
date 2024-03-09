
function area(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2;
    return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  }
  
  function perimeter(side1, side2, side3) {
    return side1 + side2 + side3;
  }
  
  function triangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
      return "Equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  }
  
  function validateTriangle(side1, side2, side3) {
    return (
      side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1
    );
  }
  export { area, perimeter,triangleType, validateTriangle };