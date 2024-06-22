import { Weapon } from "../weapon";
import { Impact } from "../modifiers/impact";
import { Pierce } from "../modifiers/pierce";

export const anakinLightsaber = new Weapon(
  "Anakin's Lightsaber",
  0,
  6,
  0,
  0,
  0,
  [new Impact(2), new Pierce(2)]
);
