"use strict";
// void is type not return value
const useVoid = () => {
    console.log("Tesstt 123");
};
// never is type never completes or always throws an error
const useNever = () => {
    throw Error("Something happen");
};
