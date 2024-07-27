import { Modifier } from "../modifier";

export class Blast extends Modifier {
  constructor() {
    super(
      undefined,

      "Blast",
      "During the Apply Cover step, a defending unit cannot use light or heavy cover to cancel hit results produced by an attack pool that contains dice added by a weapon with the Blast keyword."
    );
  }
}
