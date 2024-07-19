import { HeavyWeapon } from "../heavy_weapon";
import { CoordinateEmplacement } from "../modifiers/coordinate";
import { LowProfile } from "../modifiers/low_profile";
import { PreparedPosition } from "../modifiers/prepared_position";
import { Personnel } from "../personnel";
import { UnitPersonnelHeavyWeapon } from "../unit_personnel_heavy_weapon";
import { a280 } from "../weapons/a280";
import { unarmed } from "../weapons/unarmed";

export class RebelVeterans extends UnitPersonnelHeavyWeapon {
  constructor(heavyWeapon?: HeavyWeapon, personnel?: Personnel) {
    super(
      undefined,

      "Rebel Veterans",
      4,
      1,
      1,
      [unarmed, a280],
      heavyWeapon,
      personnel,
      1,
      "White",
      "Trooper",
      true,
      true
    );

    this.modifiers = [
      new CoordinateEmplacement(),
      new PreparedPosition(),
      new LowProfile(),
    ];
  }
}
