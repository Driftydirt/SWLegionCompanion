import { HeavyWeapon } from "../heavy_weapon";
import { Impact } from "../modifiers/impact";

export class Dlt19Trooper extends HeavyWeapon {
  constructor() {
    super(undefined, "DLT-19 Trooper", 1, 0, 0, 2, 1, 4, undefined, [
      new Impact(1),
    ]);
  }
}
