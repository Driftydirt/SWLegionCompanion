import { Modifier } from "../modifier";

export class Deflect extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Deflect",
      "While a unit with the Defect keyword is defending against a ranged attack or using the Guardian X keyword, its surge conversion chart gains e:d. Additionally, during the Convert Defense Surges step before converting e results, the attacker sufers one wound if there is at least one e result in the defense roll. If the Defect keyword causes the attacking unit to be defeated, the attack continues, and the defender can still sufer wounds. While defending or using the Guardian X keyword against an attack in which weapons with the High Velocity weapon keyword are the only weapons in an attack pool, the Defect keyword has no efect.",
      amount
    );
  }
}
