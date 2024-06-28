import { HeavyWeapon } from "../heavy_weapon";
import { Duelist } from "../modifiers/duelist";

export const beskadDuelist = new HeavyWeapon(
  undefined,
  "Beskad Duelist",
  1,
  0,
  0,
  2,
  0,
  0,
  undefined,
  [new Duelist()]
);
