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
}
