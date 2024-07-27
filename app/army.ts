import { CommandCard } from "./command_card";
import { ArmyInterface, Unit, UnitInterface } from "./interfaces";
import { UnitForce } from "./unit_force";
import { UnitHeavyWeapon } from "./unit_heavy_weapon";
import { UnitNoExtra } from "./unit_no_extra";
import { UnitPersonnel } from "./unit_personnel";
import { UnitPersonnelHeavyWeapon } from "./unit_personnel_heavy_weapon";
import { UnitUpgradeCard } from "./unit_upgrade_card";

export class Army {
  private units: Unit[] = [];
  private id: string = "";
  private faction: "rebel" | "empire" | "republic" | "separatist" | undefined;
  private commandCards: CommandCard[];
  constructor(
    units?: Unit[],
    id?: string,
    armyInterface?: ArmyInterface,
    faction?: "rebel" | "empire" | "republic",
    commandCards?: CommandCard[]
  ) {
    this.faction = faction;
    let interfaceUnits: Unit[] = [];
    if (armyInterface != undefined) {
      armyInterface.units.forEach((unit) => {
        let unitSwitch: Unit;
        switch (unit.type) {
          case "Force":
            unitSwitch = new UnitForce(unit);
            break;
          case "HeavyWeapon":
            unitSwitch = new UnitHeavyWeapon(unit);
            break;
          case "Personnel":
            unitSwitch = new UnitPersonnel(unit);
            break;
          case "PersonnelHeavyWeapon":
            unitSwitch = new UnitPersonnelHeavyWeapon(unit);
            break;
          default:
            unitSwitch = new UnitNoExtra(unit);
        }

        interfaceUnits.push(unitSwitch);
      });
      if (interfaceUnits.length > 0) this.units = interfaceUnits;
      this.id = armyInterface.id;
      this.commandCards = armyInterface.commandCards;
    } else {
      this.commandCards = commandCards ?? [];
      this.units = units ? units : [];

      this.id = id ? id : "";
    }
  }

  public getId() {
    return this.id;
  }

  public getFaction() {
    return this.faction;
  }

  public getUnits() {
    return this.units;
  }

  public addUnit(unit: Unit) {
    this.units.push(unit);
  }
  public getCommandCards() {
    return this.commandCards;
  }

  public toInterface(): ArmyInterface {
    const unitInterfaces: UnitInterface[] = [];
    this.units.forEach((unit) => {
      unitInterfaces.push(unit.toInterface());
    });
    return {
      id: this.id,
      units: unitInterfaces,
      commandCards: this.commandCards,
    };
  }
}
