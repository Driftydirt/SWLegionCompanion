import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
type AttackDice = {
  colour: string | undefined;
};

const diceLookup: Record<string, string> = {
  White: "/icons/whiteAttackDice.png",
  Red: "/icons/redAttackDice.png",
  Black: "/icons/blackAttackDice.png",
};
export function AttackDice({ colour }: AttackDice) {
  const [png, setPng] = useState<string>(diceLookup["White"]);

  useEffect(() => {
    if (colour) setPng(diceLookup[colour]);
  }, [colour]);
  return (
    <div className="attack-dice">
      <img className="courage" src={`${png}`} width={30} height={30} />
    </div>
  );
}
