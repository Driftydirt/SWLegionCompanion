import { Modifier } from "../modifier";

export class Critical extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Critical",
      "When a unit converts attack surges for an attack pool with the Critical X keyword, during the Convert Surges step it may convert up to X attack surge Attack Surge Symbol results to critical Crit Symbol results.",
      amount
    );
  }
}
