export function createUserProfile(id, name) {
  return {
    userId: id,
    userName: name,
    status: "active",
  };
}


export const User = {
  createUser: (id, name) => {
    return { id, name, status: "active" };
  },

  updateUser: (id, user) => {
    return { ...user, id };
  },
};

export class RealUser {
  constructor(greeting) {
    this.greeting = greeting;
  }

  createUser(name) {
    this.user = { name: name, greeting: this.greeting };
    return this.user;
  }

  showGreeting() {
    console.log(`${this.greeting}, ${this.user.name}!`);
  }
}

export class AdminUser extends RealUser {
  constructor() {
    super("Greetings to admin");
  }

  showGreeting() {
    console.log(`${this.greeting}, ${this.user.name}!`);
  }
}