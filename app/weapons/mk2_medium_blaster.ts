import { Critical } from "../modifiers/critical";
import { Cumbersome } from "../modifiers/cumbersome";
import { FixedFront } from "../modifiers/fixed_front";
import { Weapon } from "../weapon";

export const mark2MediumBlaster = new Weapon(
  "Mark 2 Medium Blaster",
  0,
  4,
  0,
  1,
  3,
  [new Critical(2), new Cumbersome(), new FixedFront()]
);
