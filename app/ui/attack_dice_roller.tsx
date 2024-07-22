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
  attackPool: AttackPool;
};
const diceroller: DiceRoller = new DiceRoller();

export function AttackDiceRoller({ attackPool }: AttackDiceRollerProps) {
  const [attackResults, setAttackResults] = useState<AttackResults>();
  const [rerollingDice, setRerollingDice] = useState<boolean>(false);

  const rollDice = () => {
    setAttackResults(diceroller.generateAttackResults(attackPool));
  };
  const clearDiceRoll = () => {
    setAttackResults(undefined);
  };

  const saveAttackResults = (attackResult: AttackResults) => {
    setAttackResults(attackResult);
  };

  return (
    <>
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
