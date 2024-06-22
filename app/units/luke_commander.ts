import { ForceUpgrade } from "../force_upgrades";
import { forcePush } from "../force_upgrades/force_push";
import { forceReflexes } from "../force_upgrades/force_reflexes";
import { charge } from "../modifiers/charge";
import { deflect } from "../modifiers/deflect";
import { immunePierce } from "../modifiers/immune_pierce";
import { jump } from "../modifiers/jump";
import { UnitForce } from "../unit_force";
import { anakinLightsaber } from "../weapons/anakin's_lightsaber";
import { lukeBlaster } from "../weapons/luke's_blaster";

export class LukeCommander extends UnitForce {
  constructor(forceUpgrades: ForceUpgrade[]) {
    super(
      "Luke Skywalker",
      1,
      6,
      3,
      [anakinLightsaber, lukeBlaster],
      2,
      "Red",
      "Trooper",
      false,
      false,
      true,
      forceUpgrades
    );

    this.modifiers = [jump, charge, deflect, immunePierce];
  }
}
