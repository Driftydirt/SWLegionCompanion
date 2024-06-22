import { impact } from "../modifiers/Impact";
import { pierce } from "../modifiers/pierce";
import { Weapon } from "../weapon";

export const anakinLightsaber = new Weapon(
  "Anakin's Lightsaber",
  0,
  6,
  0,
  0,
  0,
  [impact, pierce]
);
