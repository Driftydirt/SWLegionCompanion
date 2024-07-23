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
import { Reliable } from "../modifiers/reliable";
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
import { dc15aBlasterCarbine } from "../weapons/dc-15a_blaster_carbine";
import { dualDC17HandBlasters } from "../weapons/dual_dc-17_hand_blasters";
import { e11_d } from "../weapons/e11_d";
import { razorClawsShockProd } from "../weapons/razor_claws_shock_prod";
import { se14_s } from "../weapons/se14_s";
import { unarmed } from "../weapons/unarmed";

export class CloneTrooperInfantry extends UnitNoExtra {
  constructor(upgrades: UpgradeCard[]) {
    super(
      undefined,
      "Clone Trooper Infantry",
      4,
      1,
      2,
      [unarmed, dc15aBlasterCarbine],
      2,
      "red",
      "Clone Trooper",
      false,
      false,
      false,
      upgrades
    );

    this.modifiers = [new Reliable(1)];
  }
}
