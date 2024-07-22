import { HeavyWeapon } from "./heavy_weapon";
import { UnitPersonnelInterface } from "./interfaces";
import { Personnel } from "./personnel";
import { Unit } from "./unit";
import { UnitUpgradeCard } from "./unit_upgrade_card";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitPersonnel extends UnitUpgradeCard {
  protected personnel: Personnel | undefined;
  constructor(
    unitPersonnelInterface?: UnitPersonnelInterface,
    name?: string,
    numberOfMinis?: number,
    woundsPerMini?: number,
    courage?: number,
    weapon?: Weapon[],
    personnel?: Personnel | undefined,
    movementSpeed?: number,
    defenceDie?: "white" | "red",
    unitType?: string,
    surgeToDefend: boolean = false,
    surgeToHit: boolean = false,
    surgeToCrit: boolean = false,

    upgradeCards?: UpgradeCard[]
  ) {
    if (unitPersonnelInterface) {
      super(unitPersonnelInterface.unitUpgradeCard);
      if (unitPersonnelInterface.personnel)
        this.personnel = new Personnel(unitPersonnelInterface.personnel);
    } else {
      super(
        undefined,
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
  }
  public getPersonnel(): Personnel | undefined {
    return this.personnel;
  }
  public toInterface(): UnitPersonnelInterface {
    return {
      type: "Personnel",
      personnel: this.personnel?.toPersonnelInterface(),
      unitUpgradeCard: super.toUnitUpgradeCardInterface(),
    };
  }
}
