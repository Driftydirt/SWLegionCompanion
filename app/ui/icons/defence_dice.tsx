import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
type DefenceDice = {
  colour: string | undefined;
};

const diceLookup: Record<string, string> = {
  White: "/icons/WhiteDice.png",
  Red: "/icons/RedDice.png",
};
export function DefenceDice({ colour }: DefenceDice) {
  const [png, setPng] = useState<string>();

  useEffect(() => {
    if (colour) setPng(diceLookup[colour]);
  }, [colour]);
  return (
    <div className="dice">
      <img className="courage" src={`${png}`} width={40} height={40} />
    </div>
  );
}
