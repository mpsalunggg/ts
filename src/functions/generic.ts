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
