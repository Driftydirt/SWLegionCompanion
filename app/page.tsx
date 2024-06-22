"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Button, Row } from "react-bootstrap";
import { Army } from "./army";
import { forcePush } from "./force_upgrades/force_push";
import { forceReflexes } from "./force_upgrades/force_reflexes";
import { cm_0_93_trooper } from "./heavy_weapons/cm-0-93_trooper";
import { z6Trooper } from "./heavy_weapons/z6_trooper";
import { rebelTrooper } from "./personnel/rebel_trooper";
import { LukeCommander } from "./units/luke_commander";
import { RebelTroopers } from "./units/rebel_troopers";
import { RebelVeterans } from "./units/rebel_veterans";
import { useState } from "react";
import { ArmyViewer } from "./ui/army_viewer";
import { RebelOfficer } from "./units/rebel_officer";
import { vigilance } from "./upgrade_cards/command/vigilance";
import { portableScanner } from "./upgrade_cards/gear/portable_scanner";
import { Mark2MediumBlasterTrooper } from "./units/mk2_medium_blaster_trooper";
import { MandalorianResistance } from "./units/mandalorian_resistance";
import { beskadDuelist } from "./heavy_weapons/beskad_duelist";
import { offensivePush } from "./upgrade_cards/training/offensive_push";
import { hqUplink } from "./upgrade_cards/comms/hq_uplink";

const rebelArmyInit: Army = new Army([
  new LukeCommander([forcePush, forceReflexes]),
  new RebelOfficer([vigilance, portableScanner]),
  new RebelTroopers(z6Trooper, rebelTrooper),
  new RebelVeterans(undefined, rebelTrooper),
  new Mark2MediumBlasterTrooper(),
  new MandalorianResistance(beskadDuelist, [hqUplink, offensivePush]),
  new MandalorianResistance(beskadDuelist, [hqUplink, offensivePush]),
]);
const empireArmyInit: Army = new Army([
  new RebelTroopers(z6Trooper, rebelTrooper),
  new RebelVeterans(cm_0_93_trooper, rebelTrooper),
]);
export default function Home() {
  // Initialize Firebase

  const [rebelArmy, setRebelArmy] = useState<Army>(rebelArmyInit);
  const [empireArmy, setEmpireArmy] = useState<Army>(empireArmyInit);
  const [faction, setFaction] = useState<Army>();
  const onSave = () => {
    setFaction(undefined);
    return;
  };

  return (
    <>
      {faction != undefined ? (
        <ArmyViewer army={faction} onSave={onSave}></ArmyViewer>
      ) : (
        <>
          <Button onClick={() => setFaction(rebelArmy)}>Rebels</Button>
          <Button onClick={() => setFaction(empireArmy)}>Empire</Button>
        </>
      )}
    </>
  );
}
