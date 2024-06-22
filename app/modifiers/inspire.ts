import { Modifier } from "../modifier";

export class Inspire extends Modifier {
  constructor(amount?: number) {
    super(
      "Inspire",
      "After a unit with the Inspire X keyword performs its Rally step, remove up to X total suppression tokens from other friendly units at range 1–2.",
      amount
    );
  }
}
