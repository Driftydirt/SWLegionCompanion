import { HeavyWeapon } from "./heavy_weapon";
import { Personnel } from "./personnel";
import { Unit } from "./unit";
import { UnitUpgradeCard } from "./unit_upgrade_card";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitPersonnel extends UnitUpgradeCard {
  protected personnel: Personnel | undefined;
  constructor(
    name: string,
    numberOfMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon[],
    personnel: Personnel | undefined,
    movementSpeed: number,
    defenceDie: string,
    unitType: string,
    surgeToDefend: boolean = false,
    surgeToHit: boolean = false,
    surgeToCrit: boolean = false,

    upgradeCards?: UpgradeCard[]
  ) {
    super(
      name,
      numberOfMinis,
      woundsPerMini,
      courage,
      weapon,
      movementSpeed,
      defenceDie,
      unitType,
      surgeToDefend,
      surgeToHit,
      surgeToCrit,
      upgradeCards
    );
    this.personnel = personnel;
    if (personnel) this.baseMinis = this.baseMinis + 1;
    this.currentBaseMinis = this.baseMinis;
  }
  public getPersonnel(): Personnel | undefined {
    return this.personnel;
  }
}
