import { Suppressive } from "../modifiers/suppressive";
import { Weapon } from "../weapon";

export const e11_d_focused_config = new Weapon(
  undefined,

  "E-11D Focused Fire Config",
  0,
  1,
  0,
  1,
  4,
  [new Suppressive()],
  true
);
