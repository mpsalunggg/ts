function getLength(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }

}
console.log(getLength("hello")); 

function getLengthSafe(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.toString().length;
  }
}

console.log(getLengthSafe("hello")); 
console.log(getLengthSafe(42));