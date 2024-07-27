import { CommandCard } from "@/app/command_card";

export class MyAllyIsTheForce extends CommandCard {
  constructor() {
    super(
      undefined,
      "My Ally Is The Force",
      `When a friendly trooper unit is issued an order, it gains 1 dodge token.`,

      2,
      "2 Troopers",
      false
    );
  }
}
