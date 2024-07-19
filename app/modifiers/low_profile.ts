import { Modifier } from "../modifier";

export class LowProfile extends Modifier {
  constructor() {
    super(
      undefined,
      "Low Profile",
      "While defending against a ranged attack, if a unit with the Low Profle keyword would roll one or more defense dice during the Roll Cover Pool step, it rolls one fewer defense die and instead adds an additional d result to the cover pool afer rolling",
      undefined
    );
  }
}
