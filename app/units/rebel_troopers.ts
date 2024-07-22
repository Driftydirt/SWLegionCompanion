import { HeavyWeapon } from "../heavy_weapon";
import { Agile } from "../modifiers/agile";
import { Nimble } from "../modifiers/nimble";
import { Personnel } from "../personnel";
import { UnitPersonnelHeavyWeapon } from "../unit_personnel_heavy_weapon";
import { a280 } from "../weapons/a280";
import { unarmed } from "../weapons/unarmed";

export class RebelTroopers extends UnitPersonnelHeavyWeapon {
  constructor(heavyWeapon?: HeavyWeapon, personnel?: Personnel) {
    super(
      undefined,

      "Rebel Troopers",
      4,
      1,
      1,
      [unarmed, a280],
      heavyWeapon,
      personnel,
      2,
      "white",
      "Trooper",
      true
    );

    this.modifiers = [new Nimble(), new Agile(1)];
  }
}
