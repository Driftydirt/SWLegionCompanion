import { Weapon } from "../weapon";
import { Impact } from "../modifiers/impact";
import { Pierce } from "../modifiers/pierce";

export const anakinLightsaber = new Weapon(
  undefined,
  "Anakin's Lightsaber",
  0,
  3,
  2,
  0,
  0,
  [new Impact(2), new Pierce(1)]
);
