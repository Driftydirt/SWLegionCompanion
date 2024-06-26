import { Modifier } from "../modifier";

export class CompelTrooper extends Modifier {
  constructor() {
    super(
      undefined,
      "Compel Corps Trooper",
      "After another trooper unit at range 1–2 of a friendly unit with the Compel keyword performs its Rally step and is suppressed but not panicked, at the beginning of its Perform Action step, it may gain one suppression token to perform a free move action."
    );
  }
}
export class Compel extends Modifier {
  constructor() {
    super(
      undefined,

      "Compel",
      "After another unit at range 1–2 of a friendly unit with the Compel keyword performs its Rally step and is suppressed but not panicked, at the beginning of its Perform Action step, it may gain one suppression token to perform a free move action."
    );
  }
}
