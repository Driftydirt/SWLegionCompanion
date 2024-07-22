import { UnitNoExtraInterface } from "./interfaces";
import { UnitUpgradeCard } from "./unit_upgrade_card";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitNoExtra extends UnitUpgradeCard {
  constructor(
    unitNoExtraInterface?: UnitNoExtraInterface,
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
    if (unitNoExtraInterface) super(unitNoExtraInterface?.unitUpgradeCard);
    else
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

  public toInterface(): UnitNoExtraInterface {
    return {
      type: "NoExtra",
      unitUpgradeCard: super.toUnitUpgradeCardInterface(),
    };
  }
}
