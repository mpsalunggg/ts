// Basic Generic
type ListPeople = <T>(arr: T[]) => T;

const listPeple = ["Putra", "Testtt", "Yey"];

const printPeople: ListPeople = (listPeple) => {
  return listPeple[0];
};

console.log(printPeople<string>(listPeple));

type ListFruits<T> = (arr: T[]) => T;

const listFruits = ["banana", "apel"];

const printFruits: ListFruits<string> = (list) => {
  return list[0];
};

console.log(printFruits(listFruits));

// Generic with constraint array

type HasLength = {
  length: number;
};

const logLength = <T extends HasLength>(item: T): void => {
  console.log(item.length);
};

logLength(listFruits);
logLength("Any String");
// logLength(2); error

logLength({ name: "John", length: 12 });

// Generic keyof operator
type Events = {
  id: number;
  date: Date;
  type: "indoor" | "test";
};

type TypeKeyOf = keyof Events;

const dateOfEvent: TypeKeyOf = "date";

type Numeric = {
  [key: number]: string;
};

type NumericKeyOf = keyof Numeric;

type NumberAndString = {
  [key: string]: string;
};

type NumberAndStringKeyOf = keyof NumberAndString;

let numberObj: Numeric = {
  1: "asd",
};

let numAndStringObj: NumberAndString = {
  1: "test",
  test: "Test",
};
