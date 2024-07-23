import { HeavyWeapon } from "../heavy_weapon";
import { Reliable } from "../modifiers/reliable";
import { Personnel } from "../personnel";
import { UnitPersonnelHeavyWeapon } from "../unit_personnel_heavy_weapon";
import { UpgradeCard } from "../upgrade_card";
import { dc15aBlasterCarbine } from "../weapons/dc-15a_blaster_carbine";
import { unarmed } from "../weapons/unarmed";

export class CloneTrooperInfantry extends UnitPersonnelHeavyWeapon {
  constructor(
    upgrades?: UpgradeCard[],
    heavyWeapon?: HeavyWeapon,
    personnel?: Personnel
  ) {
    super(
      undefined,
      "Clone Trooper Infantry",
      4,
      1,
      2,
      [unarmed, dc15aBlasterCarbine],
      heavyWeapon,
      personnel,
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
