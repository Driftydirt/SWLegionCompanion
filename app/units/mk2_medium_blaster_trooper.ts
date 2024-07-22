import { Detachment } from "../modifiers/detachment";
import { FireSupport } from "../modifiers/fire_support";
import { FullPivot } from "../modifiers/full_pivot";
import { Resposition } from "../modifiers/reposition";
import { Sentinel } from "../modifiers/sentinel";
import { Unit } from "../unit";
import { UnitNoExtra } from "../unit_no_extra";
import { UnitUpgradeCard } from "../unit_upgrade_card";
import { UpgradeCard } from "../upgrade_card";
import { a280 } from "../weapons/a280";
import { mark2MediumBlaster } from "../weapons/mk2_medium_blaster";
import { unarmed } from "../weapons/unarmed";

export class Mark2MediumBlasterTrooper extends UnitNoExtra {
  constructor(upgradeCards?: UpgradeCard[]) {
    super(
      undefined,

      "Mk2 Medium Blaster Trooper",
      1,
      4,
      2,
      [unarmed, a280, mark2MediumBlaster],
      1,
      "white",
      "Emplacement Trooper",
      true,
      true,
      false,
      upgradeCards
    );

    this.modifiers = [
      new Detachment(),
      new FireSupport(),
      new FullPivot(),
      new Resposition(),
      new Sentinel(),
    ];
  }
}
