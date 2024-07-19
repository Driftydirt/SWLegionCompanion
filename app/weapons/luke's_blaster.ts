import { Longshot } from "../modifiers/longshot";
import { Pierce } from "../modifiers/pierce";
import { Weapon } from "../weapon";

export const lukeBlaster = new Weapon(
  undefined,

  "Luke's DL-44",
  0,
  3,
  1,
  1,
  2,
  [new Longshot(), new Pierce(1)]
);
