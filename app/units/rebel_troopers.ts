import { HeavyWeapon } from "../heavy_weapon";
import { Modifier } from "../modifier";
import { nimble } from "../modifiers/nimble";
import { Personnel } from "../personnel";
import { UnitPersonnelHeavyWeapon } from "../unit_personnel_heavy_weapon";
import { a280 } from "../weapons/a280";
import { unarmed } from "../weapons/unarmed";

export class RebelTroopers extends UnitPersonnelHeavyWeapon {
  constructor(
    heavyWeapon: HeavyWeapon | undefined,
    personnel: Personnel | undefined
  ) {
    super(
      "Rebel Troopers",
      4,
      1,
      1,
      [unarmed, a280],
      heavyWeapon,
      personnel,
      2,
      "White",
      "Trooper",
      true
    );

    this.modifiers = [nimble];
  }
}
