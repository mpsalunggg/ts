import { add } from "./calculator.js";
import { createUserProfile } from "./user.js";

// without declaration files the arguments are inferred as any
// When declaration file is created then types are defined properly and inferred properly
console.log(add(1, 12));

const userProfile = createUserProfile(1, "John Doe");
console.log(userProfile);