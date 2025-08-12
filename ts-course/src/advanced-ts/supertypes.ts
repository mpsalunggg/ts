// Supertype: Defines a generic shape of a Person4
type Person4 = {
  name: string;
  age: number;
};

// Subtype: A more specific type of Person44
type Employee2 = Person4 & {
  employeeId: number;
  department: string;
};

// Subtype: Another specialization of Person4
type Student = Person4 & {
  studentId: number;
  major: string;
};

// Function that accepts a Person4 but can also work with subtypes
function greet2(person: Person4): string {
  return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

const employee2: Employee2 = { name: "Alice", age: 30, employeeId: 101, department: "Engineering" };
const student2: Student = { name: "Bob", age: 22, studentId: 2001, major: "Computer Science" };

console.log(greet2(employee2));
// Works fine since Employee is a subtype of Person4
console.log(greet2(student2));
// Works fine since Student is a subtype of Person4

//! THIS will not work because of access property checks - Covered in next lecture
// console.log(greet2({ name: "Alice", age: 30, employeeId: 101, department: "Engineering" }));