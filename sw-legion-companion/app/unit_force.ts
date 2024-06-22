import { ForceUpgrade } from "./force_upgrades";
import { HeavyWeapon } from "./heavy_weapon";
import { AttackPool } from "./helpers";
import { Unit } from "./unit";
import { Weapon } from "./weapon";

export class UnitForce extends Unit {
  protected forceUpgrades: ForceUpgrade[];

  constructor(
    name: string,
    numberOfMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon[],
    forceUpgrades: ForceUpgrade[]
  ) {
    super(name, numberOfMinis, woundsPerMini, courage, weapon);
    this.forceUpgrades = forceUpgrades;
  }
  public getForceUpgrades() {
    return this.forceUpgrades;
  }
}
