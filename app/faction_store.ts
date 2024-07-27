import { Army } from "./army";

export class FactionStore {
  private empireArmies: Army[];
  private rebelArmies: Army[];
  private republicArmies: Army[];
  private separatistArmies: Army[];

  public constructor(
    empireArmies: Army[],
    rebelArmies: Army[],
    republicArmies: Army[],
    separatistArmies: Army[]
  ) {
    this.empireArmies = empireArmies;
    this.rebelArmies = rebelArmies;
    this.republicArmies = republicArmies;
    this.separatistArmies = separatistArmies;
  }

  public getEmpireArmies(): Army[] {
    return this.empireArmies;
  }

  public setEmpireArmies(empireArmies: Army[]): void {
    this.empireArmies = empireArmies;
  }

  public getRebelArmies(): Army[] {
    return this.rebelArmies;
  }

  public setRebelArmies(rebelArmies: Army[]): void {
    this.rebelArmies = rebelArmies;
  }

  public getRepublicArmies(): Army[] {
    return this.republicArmies;
  }

  public setRepublicArmies(republicArmies: Army[]): void {
    this.republicArmies = republicArmies;
  }

  public getSeparatistArmies(): Army[] {
    return this.separatistArmies;
  }

  public setSeparatistArmies(separatistArmies: Army[]): void {
    this.separatistArmies = separatistArmies;
  }
  public addNewArmy(army: Army) {
    const faction = army.getFaction();
    switch (faction) {
      case "empire":
        this.empireArmies.push(army);
        break;
      case "rebel":
        this.rebelArmies.push(army);
        break;
      case "republic":
        this.republicArmies.push(army);
        break;
      case "separatist":
        this.separatistArmies.push(army);
        break;
    }
  }

  public removeArmy(army: Army) {
    const faction = army.getFaction();
    switch (faction) {
      case "empire":
        this.empireArmies.splice(
          this.empireArmies.findIndex(
            (currentArmy) => currentArmy.getId() === army.getId()
          ),
          1
        );
        break;
      case "rebel":
        this.rebelArmies.splice(
          this.rebelArmies.findIndex(
            (currentArmy) => currentArmy.getId() === army.getId()
          ),
          1
        );
        break;
      case "republic":
        this.republicArmies.splice(
          this.republicArmies.findIndex(
            (currentArmy) => currentArmy.getId() === army.getId()
          ),
          1
        );
        break;
      case "separatist":
        this.separatistArmies.splice(
          this.separatistArmies.findIndex(
            (currentArmy) => currentArmy.getId() === army.getId()
          ),
          1
        );
        break;
    }
  }
}
