import { HeavyWeapon } from "../heavy_weapon";
import { Charge } from "../modifiers/charge";
import { Impervious } from "../modifiers/impervious";
import { Scale } from "../modifiers/scale";
import { Scout } from "../modifiers/scout";
import { Sharpshooter } from "../modifiers/sharpshooter";
import { Tactical } from "../modifiers/tactical";
import { UnitHeavyWeapon } from "../unit_heavy_weapon";
import { UpgradeCard } from "../upgrade_card";
import { Weapon } from "../weapon";
import { dc17HandBlasters } from "../weapons/dc-17_hand_blasters";

export class ArcTrooper extends UnitHeavyWeapon {
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
