import { HeavyWeapon } from "../heavy_weapon";
import { Modifier } from "../modifier";
import { critical } from "../modifiers/critical";
import { z6 } from "../weapons/z6";

export const cm_0_93_trooper = new HeavyWeapon(
  "CM-0/93 Trooper",
  1,
  4,
  0,
  0,
  1,
  4,
  undefined,
  [critical]
);
