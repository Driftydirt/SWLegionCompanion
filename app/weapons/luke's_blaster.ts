import { Pierce } from "../modifiers/pierce";
import { Weapon } from "../weapon";

export const lukeBlaster = new Weapon(
  undefined,

  "Luke's DL-44 Blaster Pistol",
  0,
  0,
  2,
  1,
  2,
  [new Pierce(2)]
);
