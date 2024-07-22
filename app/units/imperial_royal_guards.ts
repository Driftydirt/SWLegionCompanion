import { HeavyWeapon } from "../heavy_weapon";
import { Charge } from "../modifiers/charge";
import { Disciplined } from "../modifiers/disciplined";
import { Guardian } from "../modifiers/guardian";
import { Precise } from "../modifiers/precise";
import { Ready } from "../modifiers/ready";
import { UnitHeavyWeapon } from "../unit_heavy_weapon";
import { UpgradeCard } from "../upgrade_card";
import { cqc } from "../weapons/cqc";
import { e11_d } from "../weapons/e11_d";
import { ec17 } from "../weapons/ec17";
import { forcePike } from "../weapons/force_pike";
import { se14_s } from "../weapons/se14_s";

export class ImperialRoyalGuards extends UnitHeavyWeapon {
  constructor(heavyWeapon?: HeavyWeapon, upgradeCards?: UpgradeCard[]) {
    super(
      undefined,

      "Imperial Royal Guards",
      3,
      2,
      2,
      [forcePike, ec17],
      heavyWeapon,
      2,
      "red",
      "Trooper",
      false,
      false,
      false,
      upgradeCards
    );

    this.modifiers = [new Charge(), new Disciplined(2), new Guardian(2)];
  }
}
