enum Manufacturers {
  boeing = "boeing",
  airbus = "airbus",
}

interface AircraftInterface {
  _aircraftModel: string;
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

@AircraftManufacturer(Manufacturers.airbus)
class Airplane implements AircraftInterface {
  constructor(
    public _aircraftModel: string,
    private pilot: string,
  ) {
    console.log("Aircraft Class Instantiated");
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane: AircraftInterface = new Airplane("Airbus A380", "John");

console.log(airplane);
