import { Modifier } from "../modifier";

export class FixedFront extends Modifier {
  constructor() {
    super(
      "Fixed: Front",
      "To add a weapon that has the Fixed: Front or Fixed: Rear keyword to an attack pool, the defending unit must have at least one of its miniature’s bases partially inside the specified firing arc of the attacking miniature."
    );
  }
}
