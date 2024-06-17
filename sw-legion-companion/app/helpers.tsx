import { AttackPool } from "./unit";

export function displayAttackPool(attackPool: AttackPool | undefined) {
  if (attackPool === undefined) return;
  const hasWhiteDice = attackPool.whiteDice != undefined;
  const hasBlackDice = attackPool.blackDice != undefined;
  const hasRedDice = attackPool.redDice != undefined;
  return (
    <>
      {hasWhiteDice ? <p>{attackPool.whiteDice} W</p> : null}
      {hasBlackDice ? <p>{attackPool.blackDice} B</p> : null}
      {hasRedDice ? <p>{attackPool.redDice} R</p> : null}
    </>
  );
}
