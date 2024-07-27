import { Modifier } from "../modifier";

export class Scale extends Modifier {
  constructor() {
    super(
      undefined,

      "Scale",
      `When a unit with the Scale keyword performs a climb,
      it may move a vertical distance up to height 2.
      When a unit that has the Scale keyword performs a move,
      it does not reduce its maximum speed for moving out of,
      into, or through difcult terrain`
    );
  }
}
