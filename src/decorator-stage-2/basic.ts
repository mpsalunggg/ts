enum Manufacturers {
  boeing = "boeing",
  airbus = "airbus",
}

interface AircraftInterface {
  _aircraftModel: string;
  pilotName: () => void;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
}

function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = "United States Of America";
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = "Jet";
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = "Helicopter";
    }
  };
}

function MethodDecorator(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log("=======Method Decorator")
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  descriptor.writable = true;
  console.log("=======Method Decorator")
}

function StaticMethodDecorator(
  constructor: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log("=======Static Method Decorator")
  console.log(constructor);
  console.log(methodName);
  console.log(descriptor);
  descriptor.writable = true;
  console.log("=======Static Method Decorator")
}

@AircraftManufacturer(Manufacturers.airbus)
class Airplane implements AircraftInterface {
  constructor(
    public _aircraftModel: string,
    private pilot: string,
  ) {
    console.log("Aircraft Class Instantiated");
  }

  @StaticMethodDecorator
  public static seatCount(): void {
    console.log('150 Seats');
  }

  @MethodDecorator
  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane: AircraftInterface = new Airplane("Airbus A380", "John");

console.log(airplane);

airplane.pilotName = () => console.log('Function Changed');

airplane.pilotName();
