import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
type DefenceDice = {
  colour: "white" | "red";
  type?: "Blank" | "Surge" | "Block";
};

const diceLookup: Record<string, string> = {
  whiteNoResult: "/icons/WhiteDice.png",
  redNoResult: "/icons/RedDice.png",
  whiteBlock: "icons/defence/white/WhiteDefenceBlock.png",
  whiteSurge: "icons/defence/white/WhiteDefenceSurge.png",
  whiteBlank: "icons/defence/white/WhiteDefenceBlank.png",
  redBlock: "icons/defence/red/RedDefenceBlock.png",
  redSurge: "icons/defence/red/RedDefenceSurge.png",
  redBlank: "icons/defence/red/RedDefenceBlank.png",
};
export function DefenceDice({ colour, type }: DefenceDice) {
  const [png, setPng] = useState<string>(diceLookup[colour]);

  useEffect(() => {
    if (colour && type) setPng(diceLookup[colour + type]);
    else {
      setPng(diceLookup[colour + "NoResult"]);
    }
  }, [colour]);
  return (
    <div>
      <img className="courage" src={`${png}`} width={40} height={40} />
    </div>
  );
}
