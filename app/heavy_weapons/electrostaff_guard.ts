import { HeavyWeapon } from "../heavy_weapon";

import { ImmunePierce } from "../modifiers/immune_pierce";

export const electrostaffGuard = new HeavyWeapon(
  undefined,
  "Electrostaff Guard",
  1,
  0,
  2,
  0,
  0,
  0,
  undefined,
  [new ImmunePierce()]
);
