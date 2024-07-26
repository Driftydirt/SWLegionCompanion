import { CommandCard } from "@/app/command_card";

export class Push extends CommandCard {
  constructor() {
    super(
      undefined,
      "Push",
      "A tactical strike between two synchronized units is a key component of warfare.",

      2,
      "2 Units"
    );
  }
}
