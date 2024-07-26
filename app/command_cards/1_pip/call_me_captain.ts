import { CommandCard } from "@/app/command_card";

export class CallMeCaptain extends CommandCard {
  constructor() {
    super(
      undefined,
      "Call Me Captain",
      "Once per activation this round while Clone Captain Rex has a faceup order token, when another friendly unit attacks an enemy unit at range 2 and in LOS of Clone Captain Rex, add 3 red attack dice to the friendly unit's attack pool during the Form Attack Pools step.",

      1,
      "Clone Captain Rex",
      false
    );
  }
}
