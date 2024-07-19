import { Modifier } from "../modifier";

export class Detachment extends Modifier {
  constructor() {
    super(
      undefined,

      "Detachment",
      "During Army Building, a unit with the Detachment keyword doesn’t count against the maximum number of units of its rank that can be included. A unit with the Detachment keyword can be included in a player’s army only if another unit that has the unit name or unit type specifed and does not have the Detachment keyword is also included in that army. Each unit with the Detachment keyword needs its own matching specifed unit. Additionally, during the Deploy in Prepared Positions step, a unit with the Detachment keyword gains the Infltrate or Prepared Position keyword for the remainder of the game if its matching specifed unit has that keyword."
    );
  }
}
