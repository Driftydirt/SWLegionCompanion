import { HeavyWeapon } from "./heavy_weapon";
import { AttackPool } from "./helpers";
import { Personnel } from "./personnel";
import { Unit } from "./unit";
import { Weapon } from "./weapon";

export class UnitPersonnel extends Unit {
  protected personnel: Personnel | undefined;
  constructor(
    name: string,
    numberOfMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon,
    personnel: Personnel | undefined
  ) {
    super(name, numberOfMinis, woundsPerMini, courage, weapon);
    this.personnel = personnel;
    if (personnel) this.baseMinis = this.baseMinis + 1;
    this.currentBaseMinis = this.baseMinis;
  }
  public getPersonnel(): Personnel | undefined {
    return this.personnel;
  }
}
