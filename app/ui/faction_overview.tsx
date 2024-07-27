import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { DefenceDice } from "./icons/defence_dice";
import { Courage } from "./icons/courage";
import { Health } from "./icons/health";
import { FactionStore } from "../faction_store";
import { Army } from "../army";
type FactionOverviewProps = {
  faction: string;
  armies: Army[] | undefined;
  setArmy: (army: Army) => void;
};

const nameLookup: Record<string, string> = {
  empire: "Empire",
  rebels: "Rebellion",
  republic: "Grand Army of The Republic",
  separatists: "CIS",
};

const logoLookup: Record<string, string> = {
  empire: "/icons/faction_logo/Imperial_Emblem.svg",
  rebels: "/icons/faction_logo/Redstarbird.svg",
  republic: "/icons/faction_logo/Republic_Emblem.svg",
  separatists: "/icons/faction_logo/CIS_roundel.svg",
};
export function FactionOverview({
  armies,
  faction,
  setArmy,
}: FactionOverviewProps) {
  const [factionLogo, setFactionLogo] = useState<string>();
  useEffect(() => {
    setFactionLogo(logoLookup[faction]);
  }, [faction]);
  return (
    <Col>
      <Row>
        <Col>
          <Card>
            <div style={{ textAlign: "center" }}>
              <img
                style={{ margin: "auto", marginTop: 10, display: "block" }}
                src={factionLogo}
                height={200}
                width={200}
              />
            </div>

            <Card.Body>
              <Card.Title>{nameLookup[faction]}</Card.Title>

              {armies &&
                armies.map((army) => (
                  <div key={army.getId()} className="army-card">
                    <Card onClick={() => setArmy(army)}>
                      <p className="army-title" style={{ marginBottom: 0 }}>
                        {army.getId()}
                      </p>
                    </Card>
                  </div>
                ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}
