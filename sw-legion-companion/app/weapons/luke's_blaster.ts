import { Modifier } from "../modifier";
import { impact } from "../modifiers/Impact";
import { pierce } from "../modifiers/pierce";
import { Weapon } from "../weapon";

export const lukeBlaster = new Weapon(
  "Luke's DL-44 Blaster Pistol",
  0,
  0,
  2,
  1,
  2,
  [pierce]
);
