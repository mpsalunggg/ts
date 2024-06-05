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
  age: number;

  constructor(name: string, email: string, age: number) {
    super(name, email);
    this.age = age;
  }
}

const user = new User("Anonymous", "putra@gmail.com");
const adminUser = new AdminUser("Untitled", "untitled@gmail.com", 23);

console.log(user);
console.log(adminUser);
