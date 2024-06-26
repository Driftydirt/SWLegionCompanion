import { ModifierInterface, PersonnelInterface } from "./interfaces";
import { Modifier } from "./modifier";

export class Personnel {
  private name: string;
  private health: number;
  private modifiers: Modifier[] | undefined;

  constructor(
    personnelInterface?: PersonnelInterface,
    name?: string,
    health?: number,
    modifiers?: Modifier[] | undefined
  ) {
    if (personnelInterface) {
      const interfaceModifier: Modifier[] = [];
      personnelInterface.modifiers?.forEach((modifier) =>
        interfaceModifier.push(new Modifier(modifier))
      );
      this.name = personnelInterface.name;
      this.health = personnelInterface.health;
      this.modifiers;
    } else {
      this.name = name = "";
      this.health = health = 0;
      this.modifiers = modifiers;
    }
  }

  public getName(): string {
    return this.name;
  }

  public getHealth(): number {
    return this.health;
  }

  public getModifiers(): Modifier[] | undefined {
    return this.modifiers;
  }
  public toPersonnelInterface(): PersonnelInterface {
    const modifierInterfaces: ModifierInterface[] = [];
    this.modifiers &&
      this.modifiers.forEach((modifier) =>
        modifierInterfaces.push(modifier.toInterface())
      );
    return {
      name: this.name,
      health: this.health,
      modifiers: modifierInterfaces,
    };
  }
}
