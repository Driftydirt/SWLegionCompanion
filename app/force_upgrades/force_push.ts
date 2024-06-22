import { ForceUpgrade } from "../force_upgrades";

export class ForcePush extends ForceUpgrade {
  constructor() {
    super(
      "Force Push",
      "Free Action: Choose a non-commander, non operative enemy trooper unit at range 1. Perform a speed-1 move with that unit, even if it is engaged.",
      true,
      undefined
    );
  }
}
