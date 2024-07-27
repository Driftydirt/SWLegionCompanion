import { Army } from "./army";
import { CommandCard } from "./command_card";
import { Ambush } from "./command_cards/1_pip/ambush";
import { CallMeCaptain } from "./command_cards/1_pip/call_me_captain";
import { Implacable } from "./command_cards/1_pip/implacable";
import { SonOfSkywalker } from "./command_cards/1_pip/son_of_skywalker";
import { YouServeYourMasterWell } from "./command_cards/1_pip/you_serve_your_master_well";
import { FullOfSurprises } from "./command_cards/2_pip/full_of_suprises";
import { LeadFromTheFront } from "./command_cards/2_pip/lead_from_the_front";
import { MyAllyIsTheForce } from "./command_cards/2_pip/my_ally_is_the_force";
import { NewWaysToMotivateThem } from "./command_cards/2_pip/new_ways_to_motivate_them";
import { Push } from "./command_cards/2_pip/push";
import { TacticalPlanning } from "./command_cards/2_pip/tactical_planning";
import { Assault } from "./command_cards/3_pip/assault";
import { IAmAJedi } from "./command_cards/3_pip/i_am_a_jedi";
import { LeadersOfThe501st } from "./command_cards/3_pip/leaders_of_the_501";
import { MasterOfEvil } from "./command_cards/3_pip/master_of_evil";
import { ReturnOfTheJedi } from "./command_cards/3_pip/return_of_the_jedi";
import { WereNotProgrammed } from "./command_cards/3_pip/were_not_programmed";
import { StandingOrders } from "./command_cards/4_pip/standing_orders";
import { ForcePush } from "./force_upgrades/force_push";
import { ForceReflexes } from "./force_upgrades/force_reflexes";
import { SaberThrow } from "./force_upgrades/saber_throw";
import { HeavyWeapon } from "./heavy_weapon";
import { Dlt19Trooper } from "./heavy_weapons/dlt19_trooper";
import { Dt_f16 } from "./heavy_weapons/dt-f16";
import { ElectrostaffGuard } from "./heavy_weapons/electrostaff_guard";
import { z6CloneTrooper } from "./heavy_weapons/z6_clone_trooper";
import { Unit } from "./interfaces";
import { Personnel } from "./personnel";
import { CloneTrooper } from "./personnel/clone_trooper";
import { Stormtrooper } from "./personnel/stormtrooper";
import {
  TTAUnitInterface,
  TabletopAdmiralInterface,
} from "./tabletop_admiral_interface";
import { ArcTrooper } from "./units/arc_trooper";
import { CaptainRex } from "./units/captain_rex";
import { CloneTrooperInfantry } from "./units/clone_trooper_infantry";
import { DewbackRider } from "./units/dewback_rider";
import { ImperialDeathTroopers } from "./units/imperial_death_troopers";
import { ImperialRoyalGuards } from "./units/imperial_royal_guards";
import { Stormtroopers } from "./units/stormtroopers";
import { VaderCommander } from "./units/vader_commander";
import { UpgradeCard } from "./upgrade_card";
import { AggressiveTactics } from "./upgrade_cards/command/aggressive_tactics";
import { ReconIntel } from "./upgrade_cards/gear/recon_intel";
import { UpCloseAndPersonal } from "./upgrade_cards/training/up_close_and_personal";
import { Weapon } from "./weapon";
import { e11_d_focused_config } from "./weapons/e11d_focused";
import { t21 } from "./weapons/t21";

export function parseTabletopAdmiral(json: string) {
  let army: Army = new Army();
  const parsedJson = JSON.parse(json);
  if (parsedJson satisfies TabletopAdmiralInterface) {
    const tabletopAdmiralInterface = parsedJson as TabletopAdmiralInterface;
    const units = unitParser(tabletopAdmiralInterface.units);
    const commandCards = commandCardsParser(
      tabletopAdmiralInterface.commandCards
    );
    army = new Army(
      units,
      tabletopAdmiralInterface.listname,
      undefined,
      tabletopAdmiralInterface.faction,
      commandCards
    );
  }
  return army;
}

function unitParser(unitInterfaces: TTAUnitInterface[]) {
  const units: Unit[] = [];
  unitInterfaces.forEach((unitInterface) => {
    let weapons: Weapon | undefined;
    let heavyWeapon: HeavyWeapon | undefined;
    let personnel: Personnel | undefined;
    const upgradeCards: UpgradeCard[] = [];
    unitInterface.upgrades.forEach((upgrade) => {
      if (upgradeLookup[upgrade]) upgradeCards.push(upgradeLookup[upgrade]);
      if (heavyWeaponLookup[upgrade]) heavyWeapon = heavyWeaponLookup[upgrade];
      if (weaponsLookup[upgrade]) weapons = weaponsLookup[upgrade];
      if (personnelLookup[upgrade]) personnel = personnelLookup[upgrade];
      return;
    });
    const unit = unitLookup[unitInterface.name];
    if (unit satisfies UnitLambda)
      units.push(unit(upgradeCards, heavyWeapon, personnel, weapons));
  });
  return units;
}
function commandCardsParser(commandCardsString: string[]) {
  const commandCards: CommandCard[] = [];
  commandCardsString.forEach((commandCard) => {
    commandCards.push(commandCardLookup[commandCard]);
  });
  return commandCards;
}

type UnitLambda = (
  upgrades?: UpgradeCard[],
  heavyWeapon?: HeavyWeapon,
  personnel?: Personnel,
  armament?: Weapon
) => Unit;

const unitLookup: Record<string, UnitLambda> = {
  "Darth Vader Dark Lord of the Sith": (upgrades) =>
    new VaderCommander(upgrades),
  Stormtroopers: (undefined, heavyWeapon, personnel) =>
    new Stormtroopers(heavyWeapon, personnel),
  "Imperial Death Troopers": (upgrades, heavyWeapon, personnel, armament) =>
    new ImperialDeathTroopers(heavyWeapon, armament, upgrades),
  "Imperial Royal Guards": (upgrades, heavyWeapon) =>
    new ImperialRoyalGuards(heavyWeapon, upgrades),
  "Dewback Rider": (upgrades, heavyWeapon, personnel, armament) =>
    new DewbackRider(armament),
  "Clone Captain Rex Honorable Soldier": (upgrades) => new CaptainRex(upgrades),
  "Clone Trooper Infantry": (upgrades, heavyWeapon, personnel) =>
    new CloneTrooperInfantry(upgrades, heavyWeapon, personnel),
  "Arc Troopers": (upgrades, heavyWeapon) =>
    new ArcTrooper(heavyWeapon, upgrades),
};

const upgradeLookup: Record<string, UpgradeCard> = {
  "Force Push": new ForcePush(),
  "Force Reflexes": new ForceReflexes(),
  "Saber Throw": new SaberThrow(),
  "Aggressive Tactics": new AggressiveTactics(),
  "Up Close and Personal": new UpCloseAndPersonal(),
  "Recon Intel": new ReconIntel(),
};

const heavyWeaponLookup: Record<string, HeavyWeapon> = {
  "DLT-19 Stormtrooper": new Dlt19Trooper(),
  "DT-F16": new Dt_f16(),
  "Electrostaff Guard": new ElectrostaffGuard(),
  "Z-6 Clone Trooper": new z6CloneTrooper(),
};

const weaponsLookup: Record<string, Weapon> = {
  "T-21 Blaster Rifle": t21,
  "E-11D Config": e11_d_focused_config,
};

const personnelLookup: Record<string, Personnel> = {
  Stormtrooper: new Stormtrooper(),
  "Clone Trooper Infantry": new CloneTrooper(),
};

const commandCardLookup: Record<string, CommandCard> = {
  "Standing Orders": new StandingOrders(),
  Implacable: new Implacable(),
  Assault: new Assault(),
  Ambush: new Ambush(),
  "Master of Evil": new MasterOfEvil(),
  "New Ways to Motivate Them": new NewWaysToMotivateThem(),
  Push: new Push(),
  "We're Not Programmed": new WereNotProgrammed(),
  "Tactical Planning": new TacticalPlanning(),
  "Leaders of the 501st": new LeadersOfThe501st(),
  "Call Me Captain": new CallMeCaptain(),
  "Lead from the Front": new LeadFromTheFront(),
  "You Serve Your Master Well": new YouServeYourMasterWell(),
  "Son of Skywalker": new SonOfSkywalker(),
  "Return of the Jedi": new ReturnOfTheJedi(),
  "I am a Jedi": new IAmAJedi(),
  "My Ally Is the Force": new MyAllyIsTheForce(),
  "Full of Surprises": new FullOfSurprises(),
};
