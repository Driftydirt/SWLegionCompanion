import { Unit } from "./interfaces";

export class Army {
  private units: Unit[];
  constructor(units: Unit[] = []) {
    this.units = units;
  }

  public getUnits() {
    return this.units;
  }

  public addUnit(unit: Unit) {
    this.units.push(unit);
  }
}
