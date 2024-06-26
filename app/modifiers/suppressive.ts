import { Modifier } from "../modifier";

export class Suppressive extends Modifier {
  constructor() {
    super(
      undefined,

      "Suppressive",
      "After defending against an attack pool that includes a weapon with the Suppressive keyword, the defending unit gains one suppression token during the Assign Suppression Token to Defender step."
    );
  }
}
