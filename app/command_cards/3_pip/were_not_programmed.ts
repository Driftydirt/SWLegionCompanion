import { CommandCard } from "@/app/command_card";

export class WereNotProgrammed extends CommandCard {
  constructor() {
    super(
      undefined,
      "We're Not Programmed",
      "Clone Captain Rex gains inspire 2 and 2 surge tokens. When Clone Captain Rex activates, he recovers",

      3,
      "3 Special Forces or Corps Units"
    );
  }
}
