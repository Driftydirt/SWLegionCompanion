import { ForcePush } from "./force_upgrades/force_push";
import { ForceReflexes } from "./force_upgrades/force_reflexes";
import { SaberThrow } from "./force_upgrades/saber_throw";
import { HeavyWeapon } from "./heavy_weapon";
import { Dlt19Trooper } from "./heavy_weapons/dlt19_trooper";
import { Dt_f16 } from "./heavy_weapons/dt-f16";
import { ElectrostaffGuard } from "./heavy_weapons/electrostaff_guard";
import { Unit } from "./interfaces";
import { Personnel } from "./personnel";
import { Stormtrooper } from "./personnel/stormtrooper";
import {
  TTAUnitInterface,
  TabletopAdmiralInterface,
} from "./tabletop_admiral_interface";
import { DewbackRider } from "./units/dewback_rider";
import { ImperialDeathTroopers } from "./units/imperial_death_troopers";
import { ImperialRoyalGuards } from "./units/imperial_royal_guards";
import { Stormtroopers } from "./units/stormtroopers";
import { VaderCommander } from "./units/vader_commander";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";
import { e11_d_focused_config } from "./weapons/e11d_focused";
import { t21 } from "./weapons/t21";

export function parseTabletopAdmiral(json: string) {
  const parsedJson = JSON.parse(json);
  if (parsedJson satisfies TabletopAdmiralInterface) {
    const tabletopAdmiralInterface = parsedJson as TabletopAdmiralInterface;
    const units = unitParser(tabletopAdmiralInterface.units);
    console.log(units);
  }
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
      else return;
      if (heavyWeaponLookup[upgrade]) heavyWeapon = heavyWeaponLookup[upgrade];
      else return;
      if (weaponsLookup[upgrade]) weapons = weaponsLookup[upgrade];
      else return;
      if (personnelLookup[upgrade]) personnel = personnelLookup[upgrade];
      else return;
    });
    const unit = unitLookup[unitInterface.name];
    if (unit satisfies UnitLambda)
      units.push(unit(upgradeCards, heavyWeapon, personnel, weapons));
  });
  return units;
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
};

const upgradeLookup: Record<string, UpgradeCard> = {
  "Force Push": new ForcePush(),
  "Force Reflexes": new ForceReflexes(),
  "Saber Throw": new SaberThrow(),
};

const heavyWeaponLookup: Record<string, HeavyWeapon> = {
  "DLT-19 Stormtrooper": new Dlt19Trooper(),
  "DT-F16": new Dt_f16(),
  "Electrostaff Guard": new ElectrostaffGuard(),
};

const weaponsLookup: Record<string, Weapon> = {
  "T-21 Blaster Rifle": t21,
  "E-11D Config": e11_d_focused_config,
};

const personnelLookup: Record<string, Personnel> = {
  Stormtrooper: new Stormtrooper(),
};
