import { Modifier } from "../modifier";

export class Scout extends Modifier {
  constructor(amount: number) {
    super(
      undefined,
      "Scout",
      "When an undeployed unit with the Scout X keyword activates, at the start of its Perform Actions step, it may deploy by performing a free speed-X move action, ignoring difcult terrain. A unit can perform this move regardless of its maximum speed. Te Scout X keyword is cumulative but cannot exceed 3. If a unit would ever have Scout X exceeding Scout 3, it has Scout 3 instead.",
      amount
    );
  }
}
