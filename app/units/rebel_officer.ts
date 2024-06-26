import { Modifier } from "../modifier";
import { Inspire } from "../modifiers/inspire";
import { Sharpshooter } from "../modifiers/sharpshooter";
import { TakeCover } from "../modifiers/take_cover";
import { Unit } from "../unit";
import { UnitNoExtra } from "../unit_no_extra";
import { UnitUpgradeCard } from "../unit_upgrade_card";
import { UpgradeCard } from "../upgrade_card";
import { a180 } from "../weapons/a180";
import { unarmed } from "../weapons/unarmed";

export class RebelOfficer extends UnitNoExtra {
  constructor(upgradeCards?: UpgradeCard[]) {
    super(
      undefined,

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
