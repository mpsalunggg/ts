// void is type not return value
const useVoid = (): void => {
  console.log("Tesstt 123");
};

// never is type never completes or always throws an error
const useNever = (): never => {
  throw Error("Something happen");
};

// async type use Promise type
const useAnotherPromise = async (): Promise<{ name: string; age: number }> => {
  return Promise.resolve({ name: "John Doe", age: 30 });
};
