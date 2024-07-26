import { CommandCard } from "@/app/command_card";

export class Ambush extends CommandCard {
  constructor() {
    super(
      undefined,
      "Ambush",
      "A well-placed unit with the element of suprise on its side can turn the tide of an entire battle.",

      1,
      "1 Unit",
      false
    );
  }
}
