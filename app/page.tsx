"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Button } from "react-bootstrap";
import { Army } from "./army";
import { RebelTrooper } from "./personnel/rebel_trooper";
import { LukeCommander } from "./units/luke_commander";
import { RebelTroopers } from "./units/rebel_troopers";
import { RebelVeterans } from "./units/rebel_veterans";
import { useEffect, useState } from "react";
import { ArmyViewer } from "./ui/army_viewer";
import { RebelOfficer } from "./units/rebel_officer";
import { Mark2MediumBlasterTrooper } from "./units/mk2_medium_blaster_trooper";
import { MandalorianResistance } from "./units/mandalorian_resistance";
import { VaderCommander } from "./units/vader_commander";
import { OffensivePush } from "./upgrade_cards/training/offensive_push";
import { ForcePush } from "./force_upgrades/force_push";
import { ForceReflexes } from "./force_upgrades/force_reflexes";
import { Vigilance } from "./upgrade_cards/command/vigilance";
import { PortableScanner } from "./upgrade_cards/gear/portable_scanner";
import { HqUplink } from "./upgrade_cards/comms/hq_uplink";
import { SaberThrow } from "./force_upgrades/saber_throw";
import { Stormtroopers } from "./units/stormtroopers";
import { Stormtrooper } from "./personnel/stormtrooper";
import { ImperialDeathTroopers } from "./units/imperial_death_troopers";
import { ImperialRoyalGuards } from "./units/imperial_royal_guards";
import { DewbackRider } from "./units/dewback_rider";
import { t21 } from "./weapons/t21";
import { e11_d_focused_config } from "./weapons/e11d_focused";
import { DuckAndCover } from "./upgrade_cards/training/duck_and_cover";
import { ArmyInterface } from "./interfaces";

import { Z6Trooper } from "./heavy_weapons/z6_trooper";
import { BeskadDuelist } from "./heavy_weapons/beskad_duelist";
import { Dlt19Trooper } from "./heavy_weapons/dlt19_trooper";
import { Dt_f16 } from "./heavy_weapons/dt-f16";
import { ElectrostaffGuard } from "./heavy_weapons/electrostaff_guard";
import "./app.scss";
import { DefenceDiceRoller } from "./ui/defence_dice_roller";
import { parseTabletopAdmiral } from "./json_interpreter_service";
import * as cloneyBois from "./republic.json";
import { Ambush } from "./command_cards/1_pip/ambush";
import { Implacable } from "./command_cards/1_pip/implacable";
import { NewWaysToMotivateThem } from "./command_cards/2_pip/new_ways_to_motivate_them";
import { Push } from "./command_cards/2_pip/push";
import { MasterOfEvil } from "./command_cards/3_pip/master_of_evil";
import { Assault } from "./command_cards/3_pip/assault";
import { StandingOrders } from "./command_cards/4_pip/standing_orders";
import { FactionStore } from "./faction_store";
import { FactionSelect } from "./ui/faction_select";
import { YouServeYourMasterWell } from "./command_cards/1_pip/you_serve_your_master_well";
import { SonOfSkywalker } from "./command_cards/1_pip/son_of_skywalker";
import { FullOfSurprises } from "./command_cards/2_pip/full_of_suprises";
import { MyAllyIsTheForce } from "./command_cards/2_pip/my_ally_is_the_force";
import { IAmAJedi } from "./command_cards/3_pip/i_am_a_jedi";
import { ReturnOfTheJedi } from "./command_cards/3_pip/return_of_the_jedi";

const blankRebelArmy: Army = new Army(
  [
    new LukeCommander([new ForcePush(), new ForceReflexes()]),
    new RebelOfficer([new Vigilance(), new PortableScanner()]),
    new RebelTroopers(new Z6Trooper(), new RebelTrooper()),
    new RebelVeterans(undefined, new RebelTrooper()),
    new Mark2MediumBlasterTrooper(),
    new MandalorianResistance(new BeskadDuelist(), [
      new HqUplink(),
      new OffensivePush(),
    ]),
    new MandalorianResistance(new BeskadDuelist(), [
      new HqUplink(),
      new OffensivePush(),
    ]),
  ],
  "defaultRebel",
  undefined,
  "rebel",
  [
    new YouServeYourMasterWell(),
    new SonOfSkywalker(),
    new FullOfSurprises(),
    new MyAllyIsTheForce(),
    new IAmAJedi(),
    new ReturnOfTheJedi(),
    new StandingOrders(),
  ]
);
const blankEmpireArmy: Army = new Army(
  [
    new VaderCommander([
      new ForcePush(),
      new ForceReflexes(),
      new SaberThrow(),
    ]),
    new Stormtroopers(new Dlt19Trooper()),
    new Stormtroopers(new Dlt19Trooper(), new Stormtrooper()),
    new ImperialDeathTroopers(new Dt_f16(), e11_d_focused_config, [
      new DuckAndCover(),
    ]),
    new ImperialRoyalGuards(new ElectrostaffGuard()),
    new DewbackRider(t21),
  ],
  "defaultEmpire",
  undefined,
  "empire",
  [
    new Ambush(),
    new Implacable(),
    new NewWaysToMotivateThem(),
    new Push(),
    new MasterOfEvil(),
    new Assault(),
    new StandingOrders(),
  ]
);
const republicArmyInit: Army = parseTabletopAdmiral(JSON.stringify(cloneyBois));
const factionStore: FactionStore = new FactionStore(
  [blankEmpireArmy],
  [blankRebelArmy],
  [republicArmyInit],
  []
);
export default function Home() {
  let empireArmyInit = blankEmpireArmy;
  let rebelArmyInit = blankRebelArmy;

  const [rebelArmy, setRebelArmy] = useState<Army>(rebelArmyInit);
  const [empireArmy, setEmpireArmy] = useState<Army>(empireArmyInit);
  const [republicArmy, setRepublicArmy] = useState<Army>(republicArmyInit);
  const [savedRebelArmy, setSavedRebelArmy] = useState<Army>();
  const [savedEmpireArmy, setSavedEmpireArmy] = useState<Army>();

  const [selectedArmy, setSelectedArmy] = useState<Army>();
  const onSave = () => {
    if (selectedArmy && typeof window !== "undefined") {
      const armyInterface = selectedArmy.toInterface();
      window.localStorage.setItem(
        selectedArmy?.getId(),
        JSON.stringify(armyInterface)
      );
    }
    setSelectedArmy(undefined);
    return;
  };

  const onSetArmy = (army: Army) => {
    setSelectedArmy(army);
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
      <DefenceDiceRoller></DefenceDiceRoller>

      {/* <TabletopAdmiralImport></TabletopAdmiralImport> */}
      {selectedArmy != undefined ? (
        <ArmyViewer army={selectedArmy} onSave={onSave}></ArmyViewer>
      ) : (
        <FactionSelect
          factionStore={factionStore}
          setArmy={onSetArmy}
        ></FactionSelect>
      )}
    </>
  );
}
