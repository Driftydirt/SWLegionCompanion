import { UnitForce } from "./unit_force";
import { UnitHeavyWeapon } from "./unit_heavy_weapon";
import { UnitPersonnel } from "./unit_personnel";
import { UnitPersonnelHeavyWeapon } from "./unit_personnel_heavy_weapon";

export type Unit =
  | UnitForce
  | UnitHeavyWeapon
  | UnitPersonnel
  | UnitPersonnelHeavyWeapon;
