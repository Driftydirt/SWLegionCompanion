import { Modifier } from "../modifier";

export class Block extends Modifier {
  constructor() {
    super(
      undefined,

      "Block",
      "When a unit that has the Block keyword is defending, if it spends any dodge tokens during the Apply Dodge and Cover step, it gains surge to defend",
      undefined
    );
  }
}
