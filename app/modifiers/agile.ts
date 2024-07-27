import { Modifier } from "../modifier";

export class Agile extends Modifier {
  constructor(amount: number) {
    super(
      undefined,

      "Agile",
      "The Agile keyword allows a unit to gain a number of dodge tokens equal to X each time it performs a standard move as part of an action or free action.",
      amount
    );
  }
}
