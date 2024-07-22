import { Exemplar } from "../modifiers/exemplar";
import { Inspire } from "../modifiers/inspire";
import { TakeCover } from "../modifiers/take_cover";
import { UnitNoExtra } from "../unit_no_extra";
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
      "white",
      "Trooper",
      true,
      true,
      false,
      upgradeCards
    );

    this.modifiers = [new TakeCover(1), new Inspire(1), new Exemplar()];
  }
}
