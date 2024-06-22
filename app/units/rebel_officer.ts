import { Modifier } from "../modifier";
import { Inspire } from "../modifiers/inspire";
import { Sharpshooter } from "../modifiers/sharpshooter";
import { TakeCover } from "../modifiers/take_cover";
import { Unit } from "../unit";
import { UnitUpgradeCard } from "../unit_upgrade_card";
import { UpgradeCard } from "../upgrade_card";
import { a180 } from "../weapons/a180";
import { unarmed } from "../weapons/unarmed";

export class RebelOfficer extends UnitUpgradeCard {
  constructor(upgradeCards?: UpgradeCard[]) {
    super(
      "Rebel Officer",
      1,
      4,
      2,
      [unarmed, a180],
      2,
      "White",
      "Trooper",
      true,
      true,
      false,
      upgradeCards
    );

    this.modifiers = [new TakeCover(1), new Inspire(1), new Sharpshooter(1)];
  }
}
