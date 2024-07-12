import { HeavyWeapon } from "../heavy_weapon";
import { Critical } from "../modifiers/critical";
export class Cm_0_93_trooper extends HeavyWeapon {
  constructor() {
    super(undefined, "CM-0/93 Trooper", 1, 4, 0, 0, 1, 4, undefined, [
      new Critical(2),
    ]);
  }
}
