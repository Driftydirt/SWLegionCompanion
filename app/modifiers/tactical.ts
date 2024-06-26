import { Modifier } from "../modifier";

export class Tactical extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Tactical",
      "The Tactical X keyword allows a unit to gain a number of aim tokens equal to X each time it performs a standard move as part of an action or free action.",
      amount
    );
  }
}
