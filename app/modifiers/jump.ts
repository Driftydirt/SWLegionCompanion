import { Modifier } from "../modifier";

export class Jump extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Jump",
      "A unit that has the Jump X keyword can perform the Jump X card action any time it could perform a move action. The unit performs a move action as normal and can ignore or end its movement on top of terrain that is height X or lower. While performing a move with the Jump X action, a unit ignores the effects of difficult terrain and other miniatures with a height equal to or lower than X. When making a move with the Jump X action, a unit may place the movement template overlapping impassable terrain but may not end its move overlapping it. When a unit performs the Jump X action, measure height from that unit’s starting position.",
      amount
    );
  }
}
