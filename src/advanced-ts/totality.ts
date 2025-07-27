// function getLength(value: string | number): number {
//   if (typeof value === "string") {
//     return value.length;
//   }
// }
// console.log(getLength("hello")); 

// Above is error because the return of the function should be a type number

function getLengthSafe(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.toString().length;
  }
}

console.log(getLengthSafe("hello")); 
console.log(getLengthSafe(42));