import { CommandCard } from "@/app/command_card";

export class Assault extends CommandCard {
  constructor() {
    super(
      undefined,
      "Assault",
      "Though slower to organise, a coordinated offense can be decisive.",

      3,
      "3 Units"
    );
  }
}
