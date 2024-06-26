import { Modifier } from "../modifier";

export class Cumbersome extends Modifier {
  constructor() {
    super(
      undefined,

      "Cumbersome",
      "A unit that has a weapon with the Cumbersome keyword cannot perform a move prior to performing an attack using that weapon during the same activation unless the move is a pivot."
    );
  }
}
