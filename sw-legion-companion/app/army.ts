import { Unit } from "./interfaces";

export class Army {
  private units: Unit[];
  private uuid: number;
  constructor(units: Unit[] = []) {
    this.units = units;
    this.uuid = Math.random();
  }

  public getUuid() {
    return this.uuid;
  }

  public getUnits() {
    return this.units;
  }

  public addUnit(unit: Unit) {
    this.units.push(unit);
  }
}
