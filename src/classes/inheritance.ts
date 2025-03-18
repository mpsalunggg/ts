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

// Another Classes
class Book {
  title: string;
  author: string;
  yearPublished?: number;
  readonly isbn: string;

  constructor(
    title: string,
    author: string,
    isbn: string,
    yearPublished?: number,
  ) {
    this.title = title;
    this.author = author;
    if (yearPublished) {
      this.yearPublished = yearPublished;
    }
    this.isbn = isbn;
  }
}
