export function displayAttackPool(attackPool: AttackPool) {
  const hasWhiteDice = attackPool.whiteDice != 0;
  const hasBlackDice = attackPool.blackDice != 0;
  const hasRedDice = attackPool.redDice != 0;
  return (
    <>
      {hasWhiteDice ? <p>{attackPool.whiteDice} W</p> : null}
      {hasBlackDice ? <p>{attackPool.blackDice} B</p> : null}
      {hasRedDice ? <p>{attackPool.redDice} R</p> : null}
    </>
  );
}
export type AttackPool = {
  whiteDice: number;
  blackDice: number;
  redDice: number;
};
