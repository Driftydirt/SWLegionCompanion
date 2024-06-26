import { Modifier } from "../modifier";

export class Defend extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Defend",
      "After a unit with the Defend X keyword is issued an order, it gains X dodge tokens.",
      amount
    );
  }
}
