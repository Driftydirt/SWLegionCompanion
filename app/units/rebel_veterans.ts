import { HeavyWeapon } from "../heavy_weapon";
import { CoordinateEmplacement } from "../modifiers/coordinate";
import { Defend } from "../modifiers/defend";
import { Personnel } from "../personnel";
import { UnitPersonnelHeavyWeapon } from "../unit_personnel_heavy_weapon";
import { a280 } from "../weapons/a280";
import { unarmed } from "../weapons/unarmed";

export class RebelVeterans extends UnitPersonnelHeavyWeapon {
  constructor(heavyWeapon?: HeavyWeapon, personnel?: Personnel) {
    super(
      "Rebel Veterans",
      4,
      1,
      1,
      [unarmed, a280],
      heavyWeapon,
      personnel,
      2,
      "White",
      "Trooper",
      true,
      true
    );

    this.modifiers = [new Defend(1), new CoordinateEmplacement()];
  }
}
