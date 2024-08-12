import { HeavyWeapon } from "../heavy_weapon";
import { Nimble } from "../modifiers/nimble";
import { Precise } from "../modifiers/precise";
import { Personnel } from "../personnel";
import { UnitPersonnelHeavyWeapon } from "../unit_personnel_heavy_weapon";
import { bludgeon } from "../weapons/bludgeon";
import { e11 } from "../weapons/e11_blaster_rifle";
import { unarmed } from "../weapons/unarmed";

export class Stormtroopers extends UnitPersonnelHeavyWeapon {
  constructor(heavyWeapon?: HeavyWeapon, personnel?: Personnel) {
    super(
      undefined,

      "Stormtroopers",
      4,
      1,
      1,
      [bludgeon, e11],
      heavyWeapon,
      personnel,
      2,
      "red",
      "Trooper",
      false,
      true
    );

    this.modifiers = [new Precise(1)];
  }
}
