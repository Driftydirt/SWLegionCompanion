import { Modifier } from "../modifier";

export class FullPivot extends Modifier {
  constructor() {
    super(
      undefined,

      "Full Pivot",
      "When a unit with the Full Pivot keyword performs a pivot, it can pivot up to 360°."
    );
  }
}
