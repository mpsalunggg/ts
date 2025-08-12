// Mapped Types
// Partial Type Implementation
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
// Conditional Types
// Exclude Type Implementation
// type Exclude<T, U> = T extends U ? never : T;

// example exclude
type A = "a" | "b" | "c";
type B = "b";

type C = Exclude<A, B>;