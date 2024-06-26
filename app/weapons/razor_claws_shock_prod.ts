import { Critical } from "../modifiers/critical";
import { Suppressive } from "../modifiers/suppressive";
import { Weapon } from "../weapon";

export const razorClawsShockProd = new Weapon(
  undefined,

  "Razor Claws and Shock Prod",
  3,
  0,
  3,
  0,
  0,
  [new Critical(2), new Suppressive()]
);
