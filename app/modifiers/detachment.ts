import { Modifier } from "../modifier";

export class Detachment extends Modifier {
  constructor() {
    super(
      "Detachment",
      "A unit with the Detachment keyword is subject to several restrictions during Army Building and Setup. During Army Building, a unit with the Detachment keyword can only be included in a player’s army if a unit that has the unit name or unit type specified is also included in that army. Each unit with the Detachment keyword needs its own matching unit with the specified unit name or unit type."
    );
  }
}
