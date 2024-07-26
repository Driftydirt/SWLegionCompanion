import { CommandCard } from "@/app/command_card";

export class TacticalPlanning extends CommandCard {
  constructor() {
    super(
      undefined,
      "Tactical Planning",
      "After a friendly Support or Special Forces unit performs an attack against a unit that has a faceup order token this round, shuffle that token back into its order pool.",

      2,
      "2 Support or Special Forces Units"
    );
  }
}
