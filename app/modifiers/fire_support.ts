import { Modifier } from "../modifier";

export class FireSupport extends Modifier {
  constructor() {
    super(
      undefined,

      "Fire Support",
      "Afer a unit with the Fire Support keyword is issued an order, it gains a standby token."
    );
  }
}
