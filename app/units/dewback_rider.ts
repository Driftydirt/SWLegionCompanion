import { HeavyWeapon } from "../heavy_weapon";
import { Disciplined } from "../modifiers/disciplined";
import { Precise } from "../modifiers/precise";
import { Ready } from "../modifiers/ready";
import { UnitUpgradeCard } from "../unit_upgrade_card";
import { UpgradeCard } from "../upgrade_card";
import { Weapon } from "../weapon";
import { cqc } from "../weapons/cqc";
import { e11_d } from "../weapons/e11_d";
import { razorClawsShockProd } from "../weapons/razor_claws_shock_prod";
import { se14_s } from "../weapons/se14_s";

export class DewbackRider extends UnitUpgradeCard {
  constructor(armament?: Weapon, upgradeCards?: UpgradeCard[]) {
    const weapons: Weapon[] = [razorClawsShockProd];
    armament && weapons.push(armament);
    super(
      "Dewback Rider",
      1,
      6,
      2,
      weapons,
      1,
      "Red",
      "Trooper",
      false,
      true,
      false,
      upgradeCards
    );

    this.modifiers = [new Disciplined(1), new Precise(2), new Ready(1)];
  }
}
