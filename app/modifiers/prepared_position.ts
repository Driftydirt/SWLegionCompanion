import { Modifier } from "../modifier";

export class PreparedPosition extends Modifier {
  constructor() {
    super(
      undefined,
      "Prepared Position",
      "During the Deploy in Prepared Positions step of setup, a unit with the Prepared Position keyword may deploy by placing the unit leader of that unit within friendly territory. Ten the remaining miniatures in that unit are placed in cohesion with their unit leader and within friendly territory. Tat unit then gains 1 dodge token. Miniatures cannot overlap impassable terrain when they are placed using Prepared Position"
    );
  }
}
