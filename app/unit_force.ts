import { ForceUpgrade } from "./force_upgrades";
import { HeavyWeapon } from "./heavy_weapon";
import { Unit } from "./unit";
import { UnitUpgradeCard } from "./unit_upgrade_card";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitForce extends UnitUpgradeCard {
  // figure out how to store the upgrades 1) separate array for each, 2) joined array

  constructor(
    name: string,
    numberOfMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon[],
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
  }
}
