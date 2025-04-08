class Employee {
  static companyName: string = "PT Global Indonsia";
  constructor(
    public name: string,
    public age: number,
    private _salary: number,
    protected id: number,
  ) {}

  get salary(): number {
    return this._salary;
  }

  set salary(newSalary: number) {
    if (newSalary > 0) {
      this._salary = newSalary;
    } else {
      throw Error("New salary must be positife number");
    }
  }

  public static getCompany(): string {
    return Employee.companyName;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Salary: ${this._salary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    salary: number,
    id: number,
    public department: string,
  ) {
    super(name, age, salary, id);
  }

  getDetails(): string {
    return `${super.getDetails()} : Department > ${this.department}`;
  }
}

const employee = new Employee("Mps", 21, 2000, 1);

console.log(employee.getDetails());

const manager = new Manager("Test", 22, 2012, 2, "test");

console.log(manager.getDetails());
