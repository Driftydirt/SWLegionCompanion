import { HeavyWeapon } from "../heavy_weapon";
import { Disciplined } from "../modifiers/disciplined";
import { Precise } from "../modifiers/precise";
import { Ready } from "../modifiers/ready";
import { UnitHeavyWeapon } from "../unit_heavy_weapon";
import { UpgradeCard } from "../upgrade_card";
import { Weapon } from "../weapon";
import { cqc } from "../weapons/cqc";
import { e11_d } from "../weapons/e11_d";
import { e11_d_grenade_config } from "../weapons/e11d_focused";
import { se14_s } from "../weapons/se14_s";

export class ImperialDeathTroopers extends UnitHeavyWeapon {
  constructor(
    heavyWeapon?: HeavyWeapon,
    armament?: Weapon,
    upgradeCards?: UpgradeCard[]
  ) {
    const weapons: Weapon[] = [cqc, se14_s, e11_d, e11_d_grenade_config];
    armament && weapons.push(armament);
    super(
      undefined,
      "Imperial Death Troopers",
      4,
      1,
      2,
      weapons,
      heavyWeapon,
      2,
      "Red",
      "Trooper",
      true,
      true,
      false,
      upgradeCards
    );

    this.modifiers = [new Disciplined(1), new Precise(2), new Ready(1)];
  }
}
