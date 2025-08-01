type People4 = {
  id: number;
  name: string;
  age: number;
};

//! Just an example of what keyOf operator gives us
type UserKeys = keyof People4; // "id" | "name" | "age"

let key: UserKeys;
key = "id"; // ✅ Allowed
key = "name"; // ✅ Allowed

//! Using keyof in Function Parameters and Mkaing a usecase for type U
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const userss: People4 = { id: 1, name: "Alice", age: 30 };

console.log(getProperty(userss, "name")); // ✅ "Alice"
console.log(getProperty(userss, "age")); // ✅ 30