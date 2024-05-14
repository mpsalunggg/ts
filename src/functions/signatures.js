"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.me = void 0;
exports.me = {
    name: "Yuhuu",
    age: 20,
    address: "Palu",
    greet: function (greeting) { return "".concat(greeting, " ").concat(exports.me.name); },
};
console.log(exports.me.greet("Holaaa"));
