import { Modifier } from "../modifier";

export class ScoutingParty extends Modifier {
  constructor(amount: number) {
    super(
      undefined,
      "Scouting Party",
      `During Setup, the controlling player of a unit with the Scouting Party
      keyword may choose up to X friendly trooper units that share the same faction
      or afliation with that unit and do not have the Scout keyword.
      Each chosen unit gains the Scout X keyword this game,
      where X is the Scout X value of the unit with the Scouting Party keyword.`,
      amount
    );
  }
}
