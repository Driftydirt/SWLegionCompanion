import { HeavyWeapon } from "../heavy_weapon";
import { Modifier } from "../modifier";
import { Personnel } from "../personnel";
import { UnitPersonnelHeavyWeapon } from "../unit_personnel_heavy_weapon";
import { a280 } from "../weapons/a280";
import { unarmed } from "../weapons/unarmed";

export class RebelTroopers extends UnitPersonnelHeavyWeapon {
  constructor(
    heavyWeapon: HeavyWeapon | undefined,
    personnel: Personnel | undefined
  ) {
    super("Rebel Troopers", 4, 1, 1, [unarmed, a280], heavyWeapon, personnel);

    this.modifiers = [
      new Modifier(
        "Nimble",
        "After a unit that has the Nimble keyword defends against an attack, if it spent at least one dodge token during any point of the attack sequence, it gains one dodge token."
      ),
      new Modifier(
        "Nimble",
        "After a unit that has the Nimble keyword defends against an attack, if it spent at least one dodge token during any point of the attack sequence, it gains one dodge token."
      ),
    ];
  }
}
