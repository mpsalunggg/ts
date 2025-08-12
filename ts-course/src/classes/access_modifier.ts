class Animal {
  constructor(
    public name: string,
    private age: number,
    protected email: string,
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  public getName() {
    return `Helloo bro ${this.name}, and my email age is ${this.age}`;
  }

  private getAge2() {
    return this.age;
  }

  protected getEmail() {
    return this.email;
  }
}

class Dog extends Animal {
  public getAge() {
    return this.email;
  }

  public sendEmail() {
    console.log(this.getEmail());
    return this.getEmail();
  }

  protected test() {
    console.log("yeyuuu");
  }
}

const callAnimal = new Dog("all", 21, "test@gmail.com");

callAnimal.sendEmail();
console.log(callAnimal.getName());
// callAnimal.getAge2(); this error because access modifier is private
