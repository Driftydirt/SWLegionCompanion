import { Modifier } from "../modifier";

export class Relentless extends Modifier {
  constructor() {
    super(
      undefined,

      "Relentless",
      "After a unit that has the Relentless keyword performs a move action, it may perform a free attack action."
    );
  }
}
