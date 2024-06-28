import { HeavyWeapon } from "../heavy_weapon";
import { Compel } from "../modifiers/compel";
import { Impact } from "../modifiers/impact";

export const dt_f16 = new HeavyWeapon(
  undefined,
  "DT-F16",
  2,
  1,
  1,
  0,
  1,
  3,
  [new Compel()],
  [new Impact(1)],
  true
);
