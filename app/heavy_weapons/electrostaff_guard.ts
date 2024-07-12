import { HeavyWeapon } from "../heavy_weapon";

import { ImmunePierce } from "../modifiers/immune_pierce";

export class ElectrostaffGuard extends HeavyWeapon {
  constructor() {
    super(undefined, "Electrostaff Guard", 1, 0, 2, 0, 0, 0, undefined, [
      new ImmunePierce(),
    ]);
  }
}
