"use strict";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    sayHi() {
        console.log("Hellooo " + this.name);
    }
}
class AdminUser extends User {
    constructor(name, email, age) {
        super(name, email);
        this.active = false;
        this.age = age;
    }
}
const user = new User("Anonymous", "putra@gmail.com");
const adminUser = new AdminUser("Untitled", "untitled@gmail.com", 23);
console.log(user);
console.log(adminUser);
