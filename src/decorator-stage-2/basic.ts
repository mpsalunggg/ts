function FirstDecorator(title: string) {
  return (constructor: Function) => {
    console.log(title + ": Decorator Invoked");
    console.log(constructor);
  };
}
@FirstDecorator("Testttt")
class Aircraft {
  constructor(
    public _aircraftModel: string,
    private pilot: string,
  ) {}

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}
