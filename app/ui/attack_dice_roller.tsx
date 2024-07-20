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

export function AttackDiceRoller({ attackPool }: AttackDiceRollerProps) {
  const diceroller: DiceRoller = new DiceRoller();

  const [attackResults, setAttackResults] = useState<AttackResults>();

  const rollDice = () => {
    setAttackResults(diceroller.generateAttackResults(attackPool));
  };
  const clearDiceRoll = () => {
    setAttackResults(undefined);
  };

  return (
    <>
      <Button onClick={() => rollDice()}>Roll Attack!</Button>
      {attackResults ? (
        <>
          <AttackRollViewer attackResults={attackResults}></AttackRollViewer>
          <Button onClick={() => clearDiceRoll()}>Clear Dice Roll!</Button>
        </>
      ) : null}
    </>
  );
}
