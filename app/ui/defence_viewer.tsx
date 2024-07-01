import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { DefenceDice } from "./icons/defence_dice";
import { Courage } from "./icons/courage";
import { Health } from "./icons/health";
type DefenceViewerProps = {
  colour: string | undefined;
  wounds: number | undefined;
  courage: number | undefined;
};

const diceLookup: Record<string, string> = {
  White: "/icons/WhiteDice.png",
  Red: "/icons/RedDice.png",
};
export function DefenceViewer({ colour, wounds, courage }: DefenceViewerProps) {
  const [png, setPng] = useState<string>();

  useEffect(() => {
    if (colour) setPng(diceLookup[colour]);
  }, [colour]);
  return (
    <Row>
      <Col sm={{ span: 3, offset: 3 }} style={{ paddingRight: 0 }}>
        <DefenceDice colour={colour}></DefenceDice>
      </Col>
      <Col sm={{ span: 4 }} style={{ paddingRight: 1 }}>
        <Health wounds={wounds}></Health>
        <Courage courage={courage}></Courage>
      </Col>
    </Row>
  );
}
