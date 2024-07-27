import { Modifier } from "../modifier";

export class Longshot extends Modifier {
  constructor() {
    super(
      undefined,
      "Long Shot",
      `When a unit with a weapon with the Long Shot keyword performs an attack,
       before choosing an enemy unit to attack during the Declare Defenders step,
       it may spend an aim token to increase the maximum range of that weapon by one
        until the end of that attack sequence. The attacking unit may not reroll dice
        with any aim tokens spent in this way. Only one aim token may be spent in this 
        way per attack sequence.`,
      undefined
    );
  }
}
