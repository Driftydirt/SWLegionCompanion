import { Modifier } from "../modifier";

export class MasterOfTheForce extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Master Of The Force",
      `At the end of its activation, a unit that has the Master of the Force X 
      keyword may ready up to X of its exhausted Force Upgrade Cards.`,
      amount
    );
  }
}
