class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  sayHi() {
    console.log("Hellooo " + this.name);
  }
}

class AdminUser extends User {
  active: boolean = false;
}

const user = new User("Anonymous", "putra@gmail.com");
const adminUser = new AdminUser("Untitled", "untitled@gmail.com");

console.log(user)
console.log(adminUser)