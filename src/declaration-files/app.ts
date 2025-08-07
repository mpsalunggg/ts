import { add, calculate } from "./calculator.js";
import { AdminUser, createUserProfile, User } from "./user.js";

// without declaration files the arguments are inferred as any
// When declaration file is created then types are defined properly and inferred properly
console.log(add(1, 12));

const userProfile = createUserProfile(1, "John Doe");
console.log(userProfile);


const sum = calculate(5, 3); // Returns 8
const concatenated = calculate("5", 3); // Returns '53'
const mixed = calculate(10, "20"); // Returns '1020'
const strSum = calculate("Hello, ", "world!"); // Returns 'Hello, world!'

console.log(sum, concatenated, mixed, strSum);

const newUser: User.UserProfile = User.createUser(1, "John Doe");
const updatedUser: User.UserProfile = User.updateUser(1, {
  id: 1,
  name: "Johnny Doe",
  status: "active",
});

console.log(newUser);
console.log(updatedUser);

const userAdmin = new AdminUser();
userAdmin.createUser("Bob");
userAdmin.showGreeting(); // Outputs: "Very special greetings to our VIP, Bob!"