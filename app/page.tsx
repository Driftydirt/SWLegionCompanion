"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Button } from "react-bootstrap";
import { Army } from "./army";
import { z6Trooper } from "./heavy_weapons/z6_trooper";
import { rebelTrooper } from "./personnel/rebel_trooper";
import { LukeCommander } from "./units/luke_commander";
import { RebelTroopers } from "./units/rebel_troopers";
import { RebelVeterans } from "./units/rebel_veterans";
import { useEffect, useState } from "react";
import { ArmyViewer } from "./ui/army_viewer";
import { RebelOfficer } from "./units/rebel_officer";
import { Mark2MediumBlasterTrooper } from "./units/mk2_medium_blaster_trooper";
import { MandalorianResistance } from "./units/mandalorian_resistance";
import { beskadDuelist } from "./heavy_weapons/beskad_duelist";
import { VaderCommander } from "./units/vader_commander";
import { OffensivePush } from "./upgrade_cards/training/offensive_push";
import { ForcePush } from "./force_upgrades/force_push";
import { ForceReflexes } from "./force_upgrades/force_reflexes";
import { Vigilance } from "./upgrade_cards/command/vigilance";
import { PortableScanner } from "./upgrade_cards/gear/portable_scanner";
import { HqUplink } from "./upgrade_cards/comms/hq_uplink";
import { SaberThrow } from "./force_upgrades/saber_throw";
import { Stormtroopers } from "./units/stormtroopers";
import { dlt19Trooper } from "./heavy_weapons/dlt19_trooper";
import { stormtrooper } from "./personnel/stormtrooper";
import { ImperialDeathTroopers } from "./units/imperial_death_troopers";
import { ImperialRoyalGuards } from "./units/imperial_royal_guards";
import { electrostaffGuard } from "./heavy_weapons/electrostaff_guard";
import { DewbackRider } from "./units/dewback_rider";
import { t21 } from "./weapons/t21";
import { e11_d_focused_config } from "./weapons/e11d_focused";
import { dt_f16 } from "./heavy_weapons/dt-f16";
import { DuckAndCover } from "./upgrade_cards/training/duck_and_cover";
import { ArmyInterface } from "./interfaces";

const blankRebelArmy: Army = new Army(
  [
    new LukeCommander([new ForcePush(), new ForceReflexes()]),
    new RebelOfficer([new Vigilance(), new PortableScanner()]),
    new RebelTroopers(z6Trooper, rebelTrooper),
    new RebelVeterans(undefined, rebelTrooper),
    new Mark2MediumBlasterTrooper(),
    new MandalorianResistance(beskadDuelist, [
      new HqUplink(),
      new OffensivePush(),
    ]),
    new MandalorianResistance(beskadDuelist, [
      new HqUplink(),
      new OffensivePush(),
    ]),
  ],
  "rebels"
);
const blankEmpireArmy: Army = new Army(
  [
    new VaderCommander([
      new ForcePush(),
      new ForceReflexes(),
      new SaberThrow(),
    ]),
    new Stormtroopers(dlt19Trooper),
    new Stormtroopers(dlt19Trooper, stormtrooper),
    new ImperialDeathTroopers(dt_f16, e11_d_focused_config, [
      new DuckAndCover(),
    ]),
    new ImperialRoyalGuards(electrostaffGuard),
    new DewbackRider(t21),
  ],
  "empire"
);
export default function Home() {
  let empireArmyInit = blankEmpireArmy;
  let rebelArmyInit = blankRebelArmy;

  const [rebelArmy, setRebelArmy] = useState<Army>(rebelArmyInit);
  const [empireArmy, setEmpireArmy] = useState<Army>(empireArmyInit);
  const [savedRebelArmy, setSavedRebelArmy] = useState<Army>();
  const [savedEmpireArmy, setSavedEmpireArmy] = useState<Army>();

  const [faction, setFaction] = useState<Army>();
  const onSave = () => {
    if (faction && typeof window !== "undefined") {
      const armyInterface = faction.toInterface();
      window.localStorage.setItem(
        faction?.getId(),
        JSON.stringify(armyInterface)
      );
    }
    setFaction(undefined);
    return;
  };

  useEffect(() => {
    if (typeof window !== "undefined" && !savedEmpireArmy && !savedEmpireArmy) {
      const retrievedEmpire = window.localStorage.getItem("empire");
      const retrievedRebels = window.localStorage.getItem("rebels");
      if (retrievedRebels) {
        const armyInterface = JSON.parse(retrievedRebels);

        if (armyInterface satisfies ArmyInterface) {
          setSavedRebelArmy(new Army(undefined, undefined, armyInterface));
        }
      }
      if (retrievedEmpire) {
        const armyInterface = JSON.parse(retrievedEmpire);
        if (armyInterface satisfies ArmyInterface) {
          setSavedEmpireArmy(new Army(undefined, undefined, armyInterface));
        }
      }
    }
  });

  return (
    <>
      {faction != undefined ? (
        <ArmyViewer army={faction} onSave={onSave}></ArmyViewer>
      ) : (
        <>
          <Button onClick={() => setFaction(rebelArmy)}>New Rebels</Button>

          {savedRebelArmy ? (
            <Button onClick={() => setFaction(savedRebelArmy)}>
              Saved Rebel Army
            </Button>
          ) : null}
          <Button onClick={() => setFaction(empireArmy)}>New Empire</Button>

          {savedEmpireArmy ? (
            <Button onClick={() => setFaction(savedEmpireArmy)}>
              Saved Empire Army
            </Button>
          ) : null}
        </>
      )}
    </>
  );
}
