import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
type DefenceDice = {
  colour: "white" | "red";
};

const diceLookup: Record<string, string> = {
  white: "/icons/WhiteDice.png",
  red: "/icons/RedDice.png",
};
export function DefenceDice({ colour }: DefenceDice) {
  const [png, setPng] = useState<string>(diceLookup[colour]);

  useEffect(() => {
    if (colour) setPng(diceLookup[colour]);
  }, [colour]);
  return (
    <div>
      <img className="courage" src={`${png}`} width={40} height={40} />
    </div>
  );
}
