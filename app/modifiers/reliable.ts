import { Modifier } from "../modifier";

export class Reliable extends Modifier {
  constructor(amount: number) {
    super(
      undefined,

      "Reliable",
      "At the start of the Activation Phase, a unit with the Reliable X keyword gains X surge tokens.",
      amount
    );
  }
}
