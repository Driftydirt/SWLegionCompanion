import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { DefenceDice } from "./icons/defence_dice";
import { Courage } from "./icons/courage";
import { Health } from "./icons/health";
import { FactionStore } from "../faction_store";
import { Army } from "../army";
import { FactionOverview } from "./faction_overview";
type FactionSelectProps = {
  factionStore: FactionStore;
  setArmy: (army: Army) => void;
};

export function FactionSelect({ factionStore, setArmy }: FactionSelectProps) {
  const [empireArmies, setEmpireArmies] = useState<Army[]>();
  const [rebelArmies, setRebelArmies] = useState<Army[]>();

  const [republicArmies, setRepublicArmies] = useState<Army[]>();
  const [separatistArmies, setSeparatistArmies] = useState<Army[]>();

  useEffect(() => {
    setEmpireArmies(factionStore.getEmpireArmies());
    setRebelArmies(factionStore.getRebelArmies());
    setRepublicArmies(factionStore.getRepublicArmies());
    setSeparatistArmies(factionStore.getSeparatistArmies());
  }, [factionStore]);

  return (
    <>
      <Row>
        <FactionOverview
          faction="empire"
          armies={empireArmies}
          setArmy={setArmy}
        ></FactionOverview>
        <FactionOverview
          faction="rebels"
          armies={rebelArmies}
          setArmy={setArmy}
        ></FactionOverview>
      </Row>
      <Row>
        <FactionOverview
          faction="republic"
          armies={republicArmies}
          setArmy={setArmy}
        ></FactionOverview>
        <FactionOverview
          faction="separatists"
          armies={separatistArmies}
          setArmy={setArmy}
        ></FactionOverview>
      </Row>
    </>
  );
}
