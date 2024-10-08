import { AttackPool } from "./ui/helpers";

export interface AttackResults {
  white: AttackResult;
  black: AttackResult;
  red: AttackResult;
}

export interface AttackDice {
  type: "Crit" | "Hit" | "Surge" | "Miss";
  colour: "White" | "Black" | "Red";
}

interface AttackResult {
  crits: number;
  hits: number;
  surges: number;
  misses: number;
}

export interface DefenceResult {
  block: number;
  surge: number;
  misses: number;
}

export class DiceRoller {
  private rollDice(sides: number) {
    return 1 + Math.floor(Math.random() * sides);
  }
  private rollWhiteAttackDice(amount: number): AttackResult {
    const attackResult: AttackResult = {
      crits: 0,
      hits: 0,
      surges: 0,
      misses: 0,
    };
    for (let index = 0; index < amount; index++) {
      switch (this.rollDice(8)) {
        case 1:
          attackResult.hits++;
          break;
        case 2:
          attackResult.crits++;
          break;
        case 3:
          attackResult.surges++;
          break;
        default:
          attackResult.misses++;
          break;
      }
    }
    return attackResult;
  }
  private rollBlackAttackDice(amount: number) {
    const attackResult: AttackResult = {
      crits: 0,
      hits: 0,
      surges: 0,
      misses: 0,
    };
    for (let index = 0; index < amount; index++) {
      switch (this.rollDice(8)) {
        case 1:
        case 2:
        case 3:
          attackResult.hits++;
          break;
        case 4:
          attackResult.crits++;
          break;
        case 5:
          attackResult.surges++;
          break;
        default:
          attackResult.misses++;
          break;
      }
    }
    return attackResult;
  }
  private rollRedAttackDice(amount: number) {
    const attackResult: AttackResult = {
      crits: 0,
      hits: 0,
      surges: 0,
      misses: 0,
    };
    for (let index = 0; index < amount; index++) {
      switch (this.rollDice(8)) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          attackResult.hits++;
          break;
        case 6:
          attackResult.crits++;
          break;
        case 7:
          attackResult.surges++;
          break;
        default:
          attackResult.misses++;
          break;
      }
    }
    return attackResult;
  }

  public generateAttackResults(
    attackPool: AttackPool | undefined
  ): AttackResults {
    const attackResults: AttackResults = {
      white: { crits: 0, hits: 0, surges: 0, misses: 0 },
      black: { crits: 0, hits: 0, surges: 0, misses: 0 },
      red: { crits: 0, hits: 0, surges: 0, misses: 0 },
    };
    if (!attackPool) return attackResults;
    attackResults.white = this.rollWhiteAttackDice(attackPool.whiteDice);
    attackResults.black = this.rollBlackAttackDice(attackPool.blackDice);
    attackResults.red = this.rollRedAttackDice(attackPool.redDice);

    return attackResults;
  }
  private rollRedDefenceDice(numberOfHits: number): DefenceResult {
    const defenceResult: DefenceResult = {
      block: 0,
      surge: 0,
      misses: 0,
    };
    for (let index = 0; index < numberOfHits; index++) {
      switch (this.rollDice(6)) {
        case 1:
        case 2:
        case 3:
          defenceResult.block++;
          break;
        case 4:
          defenceResult.surge++;
          break;
        default:
          defenceResult.misses++;
          break;
      }
    }
    return defenceResult;
  }
  public rollWhiteDefenceDice(numberOfHits: number): DefenceResult {
    const defenceResult: DefenceResult = {
      block: 0,
      surge: 0,
      misses: 0,
    };
    for (let index = 0; index < numberOfHits; index++) {
      switch (this.rollDice(6)) {
        case 1:
          defenceResult.block++;
          break;
        case 2:
          defenceResult.surge++;
          break;
        default:
          defenceResult.misses++;
          break;
      }
    }
    return defenceResult;
  }

  public rollDefence(numberOfHits: number, colour: "white" | "red") {
    const defenceResult: DefenceResult =
      colour === "white"
        ? this.rollWhiteDefenceDice(numberOfHits)
        : this.rollRedDefenceDice(numberOfHits);

    return defenceResult;
  }
}
