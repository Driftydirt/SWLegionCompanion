import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
type AttackDiceViewerProps = {
  colour: string | undefined;
  type: "Crit" | "Hit" | "Surge" | undefined;
};

const diceLookup: Record<string, string> = {
  WhiteBlank: "/icons/attack/white/whiteAttackDice.png",
  RedBlank: "/icons/attack/red/redAttackDice.png",
  BlackBlank: "/icons/attack/black/blackAttackDice.png",
  WhiteCrit: "/icons/attack/white/whiteAttackDice_crit.png",
  BlackCrit: "/icons/attack/black/blackAttackDice_crit.png",
  RedCrit: "/icons/attack/red/redAttackDice_crit.png",
  WhiteHit: "/icons/attack/white/whiteAttackDice_hit.png",
  BlackHit: "/icons/attack/black/blackAttackDice_hit.png",
  RedHit: "/icons/attack/red/redAttackDice_hit.png",
  WhiteSurge: "/icons/attack/white/whiteAttackDice_surge.png",
  BlackSurge: "/icons/attack/black/blackAttackDice_surge.png",
  RedSurge: "/icons/attack/red/redAttackDice_surge.png",
};
export function AttackDiceViewer({ colour, type }: AttackDiceViewerProps) {
  const [png, setPng] = useState<string>(diceLookup["White"]);

  useEffect(() => {
    if (colour) {
      if (!type) setPng(diceLookup[colour + "Blank"]);
      else setPng(diceLookup[colour + type]);
    }
  }, [colour]);
  return (
    <div className="attack-dice">
      <img className="courage" src={`${png}`} width={30} height={30} />
    </div>
  );
}
