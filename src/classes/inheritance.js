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
    constructor() {
        super(...arguments);
        this.active = false;
    }
}
const user = new User("Anonymous", "putra@gmail.com");
const adminUser = new AdminUser("Untitled", "untitled@gmail.com");
console.log(user);
console.log(adminUser);
