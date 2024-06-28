import { HeavyWeapon } from "../heavy_weapon";
import { Impact } from "../modifiers/impact";
import { z6 } from "../weapons/z6";

export const dlt19Trooper = new HeavyWeapon(
  undefined,
  "DLT-19 Trooper",
  1,
  0,
  0,
  2,
  1,
  4,
  undefined,
  [new Impact(1)]
);
