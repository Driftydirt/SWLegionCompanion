import { HeavyWeapon } from "../heavy_weapon";
import { Impervious } from "../modifiers/impervious";
import { Jump } from "../modifiers/jump";
import { Nimble } from "../modifiers/nimble";
import { UnitHeavyWeapon } from "../unit_heavy_weapon";
import { UpgradeCard } from "../upgrade_card";
import { combatTraining } from "../weapons/combat_training";
import { westar35BlasterPistols } from "../weapons/westar35_blaster_pistols";

export class MandalorianResistance extends UnitHeavyWeapon {
  constructor(heavyWeapon?: HeavyWeapon, upgradeCards?: UpgradeCard[]) {
    super(
      "Mandalorian Resistance",
      3,
      1,
      2,
      [combatTraining, westar35BlasterPistols],
      heavyWeapon,
      3,
      "Red",
      "Trooper",
      true,
      true,
      false,
      upgradeCards
    );

    this.modifiers = [new Jump(2), new Impervious(), new Nimble()];
  }
}
