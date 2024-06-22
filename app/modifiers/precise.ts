import { Modifier } from "../modifier";

export class Precise extends Modifier {
  constructor(amount?: number) {
    super(
      "Precise",
      "When an attacking unit that has the Precise X keyword spends an aim token during the Reroll Attack Dice step, it can reroll up to X additional attack dice per aim token spent.",
      amount
    );
  }
}
