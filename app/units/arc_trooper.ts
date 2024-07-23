import { HeavyWeapon } from "../heavy_weapon";
import { Charge } from "../modifiers/charge";
import { Disciplined } from "../modifiers/disciplined";
import { Impervious } from "../modifiers/impervious";
import { Precise } from "../modifiers/precise";
import { Ready } from "../modifiers/ready";
import { Scale } from "../modifiers/scale";
import { Scout } from "../modifiers/scout";
import { Sharpshooter } from "../modifiers/sharpshooter";
import { Tactical } from "../modifiers/tactical";
import { UnitHeavyWeapon } from "../unit_heavy_weapon";
import { UpgradeCard } from "../upgrade_card";
import { Weapon } from "../weapon";
import { cqc } from "../weapons/cqc";
import { dc17HandBlasters } from "../weapons/dc-17_hand_blasters";
import { e11_d } from "../weapons/e11_d";
import { e11_d_grenade_config } from "../weapons/e11d_focused";
import { se14_s } from "../weapons/se14_s";

export class arcTrooper extends UnitHeavyWeapon {
  constructor(heavyWeapon?: HeavyWeapon, upgradeCards?: UpgradeCard[]) {
    const weapons: Weapon[] = [dc17HandBlasters];
    super(
      undefined,
      "Arc Troopers",
      4,
      1,
      2,
      weapons,
      heavyWeapon,
      2,
      "red",
      "Clone Trooper",
      false,
      false,
      false,
      upgradeCards
    );

    this.modifiers = [
      new Charge(),
      new Impervious(),
      new Scale(),
      new Scout(2),
      new Sharpshooter(1),
      new Tactical(1),
    ];
  }
}
