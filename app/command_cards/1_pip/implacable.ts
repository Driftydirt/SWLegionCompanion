import { CommandCard } from "@/app/command_card";

export class Implacable extends CommandCard {
  constructor() {
    super(
      undefined,
      "Implacable",
      "When Darth Vader activates, he gains 1 dodge token. At the end of Darth Vader's first activation, he may suffer 1 wound to shuffle his order token into the order pool. During Darth Vader's second activation, he performs 1 fewer action",

      1,
      "Darth Vader",
      false
    );
  }
}
