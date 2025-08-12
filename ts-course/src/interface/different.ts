interface VehicleInterface {
  brand: string;
  year: number;
  start(): void;
}

class Car implements VehicleInterface {
  constructor(
    public brand: string,
    public year: number,
  ) {}

  start() {
    console.log(`${this.brand} car from ${this.year} is starting with key...`);
  }
}

class Bike implements VehicleInterface {
  constructor(
    public brand: string,
    public year: number,
  ) {}

  start() {
    console.log(
      `${this.brand} bike from ${this.year} is starting with kick...`,
    );
  }
}

abstract class VehicleAbstract {
  constructor(
    public brand: string,
    public year: number,
  ) {
    console.log(`Creating ${brand} (${year})`);
  }

  abstract start(): void;

  public info(): void {
    console.log(`Info: ${this.brand} - ${this.year}`);
  }
}

class Car2 extends VehicleAbstract {
  start() {
    console.log(`${this.brand} car is starting with key...`);
  }
}

class Bike2 extends VehicleAbstract {
  start() {
    console.log(`${this.brand} bike is starting with kick...`);
  }
}

const car1 = new Car("Toyota", 2022);
car1.start();

const bike1 = new Bike("Yamaha", 2020);
bike1.start();

const car2 = new Car2("Honda", 2023);
car2.start();
car2.info();

const bike2 = new Bike2("Suzuki", 2019);
bike2.start();
bike2.info();
