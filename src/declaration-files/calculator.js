export function add(num1, num2) {
  return num1 + num2;
}

function calculate(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

export { calculate };