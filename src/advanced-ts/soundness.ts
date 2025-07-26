//* Type Asertions
let value: unknown = "Hello, TypeScript!";

// TypeScript allows assertion without verifying correctness
let str: number = value as number; // No error, but incorrect

console.log(str); // Runtime error: string cannot be used as number

//! Why does this happen?

// Type assertions (as) allow bypassing TypeScript's type system, making code unsafe but more flexible.

type User3 = {
  name: string;
  age: number;
};

//! Excess Property Checks are Skipped in Assignment
const user3 = { name: "Alice", age: 25, isAdmin: true };
//! Will still error out if the type is defined on assignment
//* EXAMPLE: const user3 = { name: "Alice", age: 25, isAdmin: true }; THIS WILL ERROR OUT - SAME AS THE EXAMPLE SHARED IN PREVIOUS LECTURE

// Assigning an object with an extra property to User3
const newUser: User3 = user3; // No error, even though isAdmin is not in User3

console.log(newUser); // Works, but isAdmin is silently ignored

//! Why does this happen?

// TypeScript only checks declared types, not the entire object structure when assigned.

// This allows greater compatibility with JavaScript's dynamic nature.

//! Function Parameter Bivariance
// Bivariance means a function accepting a supertype can be assigned to a function requiring a subtype, which increases flexibility but can lead to unsafe type behavior.
type Animal3 = {
  name: string;
};

type Dog3 = Animal3 & {
  breed: string;
};

let handleAnimal = (animal: Animal3) => {
  console.log(`Handling ${animal.name}`);
};

// You can re-declare the parameter type to be a subtype of
// the declaration. TypeScript accepts a stricter type of Animal3
// a type which has additional properties.

let handleDog: (dog: Dog3) => void = handleAnimal;
handleDog({ name: "Buddy", breed: "Labrador" }); // Works fine

//! Rest Parameters

// Rest parameters are assumed to all be optional, this means
// TypeScript will not have a way to enforce the number of
// parameters available when using rest parameters

function logNumbers(...numbers: number[]) {
  console.log(numbers);
}

logNumbers(); // ✅ Works: No arguments passed
logNumbers(1, 2, 3); // ✅ Works: Multiple arguments passed

// A function which returns a void function, can accept a
// function which takes any other type.

const getPI = () => 3.14;

function runFunction(func: () => void) {
  func();
}

runFunction(getPI);
// The function actually returns a value, but TypeScript treats it as void, leading to confusion.