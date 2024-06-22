import { Modifier } from "../modifier";

export class Duelist extends Modifier {
  constructor() {
    super(
      "Duelist",
      "When a unit with the Duelist keyword performs a melee attack, if it spends one or more aim tokens during the Reroll Attack Dice step, the attack pool gains the Pierce 1 weapon keyword. While a unit with the Duelist keyword defends against a melee attack, if it spends at least one dodge token during the Apply Dodge and Cover step, it gains the Immune: Pierce keyword."
    );
  }
}
