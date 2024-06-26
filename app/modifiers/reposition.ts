import { Modifier } from "../modifier";

export class Resposition extends Modifier {
  constructor() {
    super(
      undefined,

      "Reposition",
      "When a unit with the Reposition keyword performs a standard move, it may perform a pivot either before or after performing that standard move."
    );
  }
}
