import { CommandCard } from "@/app/command_card";

export class YouServeYourMasterWell extends CommandCard {
  constructor() {
    super(
      undefined,
      "You Serve Your Master Well",
      `Luke Skywalker gains: Free Action: Choose a friendly non-commander, non-operative trooper unit at range 1, or a suppressed enemy non-commander non-operative trooper unit at range 1. Perform 1 free move or attack action with that unit. If it is an enemy unit, it can attack and start a melee with other enemy units.`,

      1,
      "Luke Skywalker",
      false
    );
  }
}
