import { CommandCard } from "@/app/command_card";

export class SonOfSkywalker extends CommandCard {
  constructor() {
    super(
      undefined,
      "Son Of Skywalker",
      `After Luke Skywalker performs his first attack, he may perform a free attack action, even if he has already performed an attack action during his activation.`,

      1,
      "Luke Skywalker",
      false
    );
  }
}
