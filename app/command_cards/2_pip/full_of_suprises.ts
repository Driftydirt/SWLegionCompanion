import { CommandCard } from "@/app/command_card";

export class FullOfSurprises extends CommandCard {
  constructor() {
    super(
      undefined,
      "Full Of Surprises",
      `Luke Skywalker gains 1 dodge token. While defending, he rolls a number of additional white dice equal to his courage value minus the number of suppression tokens he has.`,

      2,
      "Luke Skywalker",
      false
    );
  }
}
