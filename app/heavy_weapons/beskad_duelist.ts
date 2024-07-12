import { HeavyWeapon } from "../heavy_weapon";
import { Duelist } from "../modifiers/duelist";

export class BeskadDuelist extends HeavyWeapon {
  constructor() {
    super(undefined, "Beskad Duelist", 1, 0, 0, 2, 0, 0, undefined, [
      new Duelist(),
    ]);
  }
}
