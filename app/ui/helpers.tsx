import { Row } from "react-bootstrap";
import { Weapon } from "../weapon";

export function displayAttackPool(attackPool: AttackPool) {
  const hasWhiteDice = attackPool.whiteDice != 0;
  const hasBlackDice = attackPool.blackDice != 0;
  const hasRedDice = attackPool.redDice != 0;
  return (
    <Row>
      {hasWhiteDice ? <p>{attackPool.whiteDice} W</p> : null}
      {hasBlackDice ? <p>{attackPool.blackDice} B</p> : null}
      {hasRedDice ? <p>{attackPool.redDice} R</p> : null}
    </Row>
  );
}

export type MinisPerWeapon = Map<Weapon, number>;

export function generateAttackPool(miniPerWeapon: MinisPerWeapon | undefined) {
  const attackPool: AttackPool = { whiteDice: 0, blackDice: 0, redDice: 0 };
  if (miniPerWeapon === undefined) return attackPool;
  miniPerWeapon.forEach((numberOfMinis, weapon) => {
    attackPool.whiteDice =
      attackPool.whiteDice + numberOfMinis * weapon.getAttackPool().whiteDice;
    attackPool.blackDice =
      attackPool.blackDice + numberOfMinis * weapon.getAttackPool().blackDice;
    attackPool.redDice =
      attackPool.redDice + numberOfMinis * weapon.getAttackPool().redDice;
  });
  return attackPool;
}

export function combineAttackPools(
  attackPoolOne: AttackPool,
  attackPoolTwo: AttackPool | undefined
) {
  if (attackPoolTwo === undefined) return;
  attackPoolOne.whiteDice = attackPoolOne.whiteDice + attackPoolTwo.whiteDice;
  attackPoolOne.blackDice = attackPoolOne.blackDice + attackPoolTwo.blackDice;
  attackPoolOne.redDice = attackPoolOne.redDice + attackPoolTwo.redDice;
}
export type AttackPool = {
  whiteDice: number;
  blackDice: number;
  redDice: number;
};
