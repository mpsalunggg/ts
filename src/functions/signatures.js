"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.me = void 0;
exports.me = {
    name: "Yuhuu",
    age: 20,
    address: "Palu",
    greet: (greeting) => `${greeting} ${exports.me.name}`,
};
console.log(exports.me.greet("Holaaa"));
