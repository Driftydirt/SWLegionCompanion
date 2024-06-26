import { Modifier } from "../modifier";

export class Nimble extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,
      "Nimble",
      "After a unit that has the Nimble keyword defends against an attack, if it spent at least one dodge token during any point of the attack sequence, it gains one dodge token.",
      amount
    );
  }
}
