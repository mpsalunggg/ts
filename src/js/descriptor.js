const user = {
  name: "Putra",
};

const descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor);

Object.defineProperty(user, "nim", {
  value: "F55120009",
  configurable: false,
});

delete user.nim;
console.log(user.nim);
