type Person = {
  name: string;
  age: number;
  address?: string;
  greet: (greeting: string) => string;
};

export const me: Person = {
  name: "Yuhuu",
  age: 20,
  address: "Palu",
  greet: (greeting) => `${greeting} ${me.name}`,
};

console.log(me.greet("Holaaa"));
