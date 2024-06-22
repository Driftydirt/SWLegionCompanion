import { LukeCommander } from "./units/luke_commander";
import { RebelTroopers } from "./units/rebel_troopers";
import { RebelVeterans } from "./units/rebel_veterans";

export type Unit = RebelTroopers | RebelVeterans | LukeCommander;
