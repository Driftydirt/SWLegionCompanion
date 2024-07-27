import { Modifier } from "../modifier";

export class Inspire extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Inspire",
      `At the end of a unit with the Inspire X keyword’s activation,
       remove up to X total suppression tokens from other friendly units at  range 1–2.`,
      amount
    );
  }
}
