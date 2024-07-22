import { Button } from "react-bootstrap";
import { AttackDiceViewer } from "./attack_dice_viewer";
import { useEffect, useState } from "react";
type AttackDiceComponentProps = {
  colour: "White" | "Black" | "Red";
  type: "Crit" | "Hit" | "Surge" | undefined;
  rolled: boolean;
  addToRerollDice: (
    colour: "White" | "Black" | "Red",
    type: "Crit" | "Hit" | "Surge" | undefined
  ) => void;
  removeFromRerollDice: (
    colour: "White" | "Black" | "Red",
    type: "Crit" | "Hit" | "Surge" | undefined
  ) => void;
};
export function AttackDiceComponent({
  colour,
  type,
  addToRerollDice,
  removeFromRerollDice,
  rolled,
}: AttackDiceComponentProps) {
  const [selected, setSelected] = useState<boolean>(false);
  useEffect(() => {
    if (rolled) setSelected(false);
  }, [rolled]);
  return (
    //sort out this being a button add a selected var that tracks when selected and adds a border or some indicator of selection and remove the button/ make it un select
    <div
      className={`${selected ? "selected-dice" : null}`}
      onClick={() => {
        setSelected((prev) => !prev);
        if (!selected) addToRerollDice(colour, type);
        else removeFromRerollDice(colour, type);
      }}
    >
      <AttackDiceViewer colour={colour} type={type}></AttackDiceViewer>
    </div>
  );
}
