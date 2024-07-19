import { Modifier } from "../modifier";

export class Agile extends Modifier {
  constructor(amount: number) {
    super(
      undefined,

      "Agile",
      "During the Apply Cover step, a defending unit cannot use light or heavy cover to cancel hit hit symbol results produced by an attack pool that contains dice added by a weapon with the Blast keyword.",
      amount
    );
  }
}
