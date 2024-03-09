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

function calcular() {
  var side1 = parseFloat(document.getElementById("sideA").value);
  var side2 = parseFloat(document.getElementById("sideB").value);
  var side3 = parseFloat(document.getElementById("sideC").value);
  if (validateTriangle(side1, side2, side3)) {
    document.getElementById("area").textContent = area(
      side1,
      side2,
      side3
    ).toFixed(2);
    document.getElementById("perimeter").textContent = perimeter(
      side1,
      side2,
      side3
    ).toFixed(2);
    document.getElementById("triangleType").textContent = triangleType(
      side1,
      side2,
      side3
    );
  } else {
    cleanResults();
    document.getElementById("triangleType").textContent =
      "It is not a triangle!";
  }
}

document.getElementById("sideA").addEventListener("input", calcular);
document.getElementById("sideB").addEventListener("input", calcular);
document.getElementById("sideC").addEventListener("input", calcular);

function cleanInputs() {
  document.getElementById("sideA").value = "";
  document.getElementById("sideB").value = "";
  document.getElementById("sideC").value = "";
}

function cleanResults() {
  document.getElementById("area").textContent = "";
  document.getElementById("perimeter").textContent = "";
  document.getElementById("triangleType").textContent = "";
}
