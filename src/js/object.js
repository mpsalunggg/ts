const data = {
  title: "This is a ",
  author: ["Any", "Anon", "Upin"],
  // Approach one
  // printAuthor(){
  //   this.author.forEach(function(item){
  //     console.log(this.title + " - " + item)
  //   }, this)
  // }
  // Approach two use arrow function
  printAuthor() {
    this.author.forEach((item) => {
      console.log(this.title + " - " + item);
    });
  },
};

data.printAuthor();

/*
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(this.name, 'Has logged in');
  }

  logout() {
    console.log(this.name, 'Has logged out');
  }

  addPoint() {
    this.points++;
    console.log('total points', this.points);
  }
}

const user = new User('John', 'john@email.com');

console.log(user);
*/

function User(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;
}

User.prototype.login = function () {
  console.log(this.name, "Has logged in");
};

User.prototype.logout = function () {
  console.log(this.name, "Has logged out");
};

User.prototype.addPoint = function () {
  this.points++;
  console.log("total points", this.points);
};

function AdminUser(name, email, report) {
  User.apply(this, [name, email]);
  this.report = report;
}

AdminUser.prototype = Object.create(User.prototype);

AdminUser.prototype.updateReport = function (newReport) {
  this.report = newReport;
};

const user = new User("John", "john@email.com");

const adminUser = new AdminUser("Mps", "mps@gmail.com", 21);

console.log(user);

console.log(adminUser);
// user.login();
// user.addPoint();
// user.logout();
// user.addPoint()
// user.prototype.addPoint();
