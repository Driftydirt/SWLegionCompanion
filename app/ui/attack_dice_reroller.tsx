import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { DefenceDice } from "./icons/defence_dice";
import { Courage } from "./icons/courage";
import { Health } from "./icons/health";
import { AttackPool } from "./helpers";
import { AttackResults, DiceRoller } from "../dice_roller";
import { AttackRollViewer } from "./attack_roll_viewer";
type AttackDiceRerollerProps = {
  attackResults: AttackResults;
  // function to toggle rerolling
};

// what would this even look like
// + - buttons on each attack result then reroll the selected ones?
// a form would not work

export function AttackDiceReroller({ attackResults }: AttackDiceRerollerProps) {
  const diceroller: DiceRoller = new DiceRoller();

  const [newAttackResults, setNewAttackResults] = useState<AttackResults>();
  const [diceToReroll, setDiceToReroll] = useState<AttackPool>();

  const rollDice = () => {
    diceToReroll &&
      setNewAttackResults(diceroller.generateAttackResults(diceToReroll));
  };
  const clearDiceRoll = () => {
    setAttackResults(undefined);
  };

  const addRerolledDice = () => {
    // add new attack results with attack results
  };

  return (
    <>
      <Button onClick={() => rollDice()}>Roll Attack!</Button>
      {attackResults ? (
        <>
          <AttackRollViewer attackResults={attackResults}></AttackRollViewer>
          {rerollingDice ? (
            <AttackDiceReroller></AttackDiceReroller>
          ) : (
            <Button onClick={() => setRerollingDice(true)}>Reroll Dice</Button>
          )}

          <Button onClick={() => clearDiceRoll()}>Clear Dice Roll!</Button>
        </>
      ) : null}
    </>
  );
}
