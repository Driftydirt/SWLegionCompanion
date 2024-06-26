import { Modifier } from "../modifier";

export class Impervious extends Modifier {
  constructor() {
    super(
      undefined,

      "Impervious",
      "While a unit with the Impervious keyword is defending, it rolls a number of extra defense dice equal to the total Pierce X value of weapons in the attack pool."
    );
  }
}
