import { HeavyWeapon } from "../heavy_weapon";
import { Block } from "../modifiers/block";
import { Charge } from "../modifiers/charge";
import { Disciplined } from "../modifiers/disciplined";
import { Gunslinger } from "../modifiers/gunslinger";
import { ImmunePierce } from "../modifiers/immune_pierce";
import { Inspire } from "../modifiers/inspire";
import { Jump } from "../modifiers/jump";
import { Precise } from "../modifiers/precise";
import { Ready } from "../modifiers/ready";
import { Scout } from "../modifiers/scout";
import { ScoutingParty } from "../modifiers/scouting_party";
import { Sharpshooter } from "../modifiers/sharpshooter";
import { Tactical } from "../modifiers/tactical";
import { UnitNoExtra } from "../unit_no_extra";
import { UnitUpgradeCard } from "../unit_upgrade_card";
import { UpgradeCard } from "../upgrade_card";
import { Weapon } from "../weapon";
import { advancedCombatTraining } from "../weapons/advanced_combat_training";
import { cqc } from "../weapons/cqc";
import { dualDC17HandBlasters } from "../weapons/dual_dc-17_hand_blasters";
import { e11_d } from "../weapons/e11_d";
import { razorClawsShockProd } from "../weapons/razor_claws_shock_prod";
import { se14_s } from "../weapons/se14_s";

export class CaptainRex extends UnitNoExtra {
  constructor(upgrades: UpgradeCard[]) {
    super(
      undefined,

      "Clone Captain Rex",
      1,
      5,
      2,
      [advancedCombatTraining, dualDC17HandBlasters],
      2,
      "red",
      "Clone Trooper",
      false,
      false,
      true,
      upgrades
    );

    this.modifiers = [
      new Gunslinger(),
      new Scout(1),
      new ScoutingParty(2),
      new Sharpshooter(1),
      new Tactical(1),
    ];
  }
}
