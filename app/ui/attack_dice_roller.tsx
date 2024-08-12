import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { DefenceDice } from "./icons/defence_dice";
import { Courage } from "./icons/courage";
import { Health } from "./icons/health";
import { AttackPool } from "./helpers";
import { AttackResults, DiceRoller } from "../dice_roller";
import { AttackRollViewer } from "./attack_roll_viewer";
type AttackDiceRollerProps = {
  originalAttackPool: AttackPool;
  hasLightSaberThrow: boolean;
};
const diceroller: DiceRoller = new DiceRoller();

function divideAttackPool(attackPool: AttackPool) {
  const newAttackPool: AttackPool = {
    whiteDice: Math.ceil(attackPool.whiteDice / 2),
    blackDice: Math.ceil(attackPool.blackDice / 2),
    redDice: Math.ceil(attackPool.redDice / 2),
  };
  return newAttackPool;
}

export function AttackDiceRoller({
  originalAttackPool,

  hasLightSaberThrow,
}: AttackDiceRollerProps) {
  const [attackResults, setAttackResults] = useState<AttackResults>();
  const [rerollingDice, setRerollingDice] = useState<boolean>(false);
  const [throwingLightSaber, setThrowingLightSaber] = useState<boolean>();
  const [attackPool, setAttackPool] = useState<AttackPool>();

  const rollDice = () => {
    setAttackResults(diceroller.generateAttackResults(attackPool));
  };
  const clearDiceRoll = () => {
    setAttackResults(undefined);
  };

  const saveAttackResults = (attackResult: AttackResults) => {
    setAttackResults(attackResult);
  };

  const handleThrowLightsaber = () => {
    setThrowingLightSaber((prev) => (prev != undefined ? !prev : true));
    if (!throwingLightSaber)
      setAttackPool(divideAttackPool(originalAttackPool));
    else setAttackPool(originalAttackPool);
  };

  useEffect(() => {
    setAttackPool(originalAttackPool);
  }, [originalAttackPool]);

  return (
    <>
      {hasLightSaberThrow ? (
        throwingLightSaber ? (
          <Button variant="danger" onClick={() => handleThrowLightsaber()}>
            Cancel Throw
          </Button>
        ) : (
          <Button onClick={() => handleThrowLightsaber()}>
            Throw Lightsaber
          </Button>
        )
      ) : null}
      <Button onClick={() => rollDice()}>Roll Attack</Button>
      {attackResults ? (
        <>
          <Button variant="danger" onClick={() => clearDiceRoll()}>
            Clear Dice Roll
          </Button>
          <AttackRollViewer
            attackResults={attackResults}
            saveAttackResults={saveAttackResults}
          ></AttackRollViewer>
        </>
      ) : null}
    </>
  );
}
