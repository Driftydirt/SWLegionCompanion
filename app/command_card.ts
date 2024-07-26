import {
  ArmyInterface,
  CommandCardInterface,
  Unit,
  UnitInterface,
} from "./interfaces";
import { UnitForce } from "./unit_force";
import { UnitHeavyWeapon } from "./unit_heavy_weapon";
import { UnitNoExtra } from "./unit_no_extra";
import { UnitPersonnel } from "./unit_personnel";
import { UnitPersonnelHeavyWeapon } from "./unit_personnel_heavy_weapon";
import { UnitUpgradeCard } from "./unit_upgrade_card";

export class CommandCard {
  private name: string;
  private description: string;
  private pips: number;
  private orderedUnits: string;
  private exhausted: boolean;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getPips(): number {
    return this.pips;
  }

  public setPips(pips: number): void {
    this.pips = pips;
  }

  public getOrderedUnits(): string {
    return this.orderedUnits;
  }

  public setOrderedUnits(orderedUnits: string): void {
    this.orderedUnits = orderedUnits;
  }

  public isExhausted(): boolean {
    return this.exhausted;
  }

  public setExhausted(exhausted: boolean): void {
    this.exhausted = exhausted;
  }

  constructor(
    commandCardInterface?: CommandCardInterface,
    name?: string,
    description?: string,
    pips?: number,
    orderedUnits?: string,
    exhausted?: boolean
  ) {
    if (commandCardInterface) {
      this.name = commandCardInterface.name;
      this.description = commandCardInterface.description;
      this.pips = commandCardInterface.pips;
      this.orderedUnits = commandCardInterface.orderedUnits;
      this.exhausted = commandCardInterface.exhausted;
    } else {
      this.name = name ?? "";
      this.description = description ?? "";
      this.pips = pips ?? 0;
      this.orderedUnits = orderedUnits ?? "";
      this.exhausted = exhausted ?? false;
    }
  }

  public toInterface(): CommandCardInterface {
    return {
      name: this.name,
      description: this.description,
      pips: this.pips,
      orderedUnits: this.orderedUnits,
      exhausted: this.exhausted,
    };
  }
}
