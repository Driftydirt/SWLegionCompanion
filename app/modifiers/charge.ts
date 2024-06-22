import { Modifier } from "../modifier";

export class Charge extends Modifier {
  constructor(amount?: number) {
    super(
      "Charge",
      "After a unit that has the Charge keyword performs a move action that brings it into base contact with an enemy miniature to start a melee, it may perform a free attack action against that unit using only melee weapons.",
      amount
    );
  }
}
