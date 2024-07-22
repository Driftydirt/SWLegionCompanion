import { UnitForceInterface } from "./interfaces";
import { UnitUpgradeCard } from "./unit_upgrade_card";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitForce extends UnitUpgradeCard {
  // figure out how to store the upgrades 1) separate array for each, 2) joined array

  constructor(
    unitForceInterface?: UnitForceInterface,
    name?: string,
    numberOfMinis?: number,
    woundsPerMini?: number,
    courage?: number,
    weapon?: Weapon[],
    movementSpeed?: number,
    defenceDie?: "white" | "red",
    unitType?: string,
    surgeToDefend: boolean = false,
    surgeToHit: boolean = false,
    surgeToCrit: boolean = false,
    upgradeCards?: UpgradeCard[]
  ) {
    if (unitForceInterface) {
      super(unitForceInterface.unitUpgradeCard);
    } else
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
  }
  public toInterface(): UnitForceInterface {
    return {
      type: "Force",
      unitUpgradeCard: super.toUnitUpgradeCardInterface(),
    };
  }
}
