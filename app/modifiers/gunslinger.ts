import { Modifier } from "../modifier";

export class Gunslinger extends Modifier {
  constructor() {
    super(
      undefined,

      "Gunslinger",
      `When a unit with the Gunslinger keyword reaches the Declare Additional Defender step, 
      it may declare an additional defender and create an attack pool
      consisting solely of a ranged weapon that has already been contributed to another attack pool.
      The Gunslinger keyword can only be used once per attack sequence.`
    );
  }
}
