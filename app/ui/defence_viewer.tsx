import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { DefenceDice } from "./icons/defence_dice";
import { Courage } from "./icons/courage";
import { Health } from "./icons/health";
type DefenceViewerProps = {
  colour: "white" | "red";
  wounds: number | undefined;
  courage: number | undefined;
};

export function DefenceViewer({ colour, wounds, courage }: DefenceViewerProps) {
  return (
    <Row>
      <Col
        className="dice"
        sm={{ span: 3, offset: 3 }}
        style={{ paddingRight: 0 }}
      >
        <DefenceDice colour={colour}></DefenceDice>
      </Col>
      <Col sm={{ span: 4 }} style={{ paddingRight: 1 }}>
        <Health wounds={wounds}></Health>
        <Courage courage={courage}></Courage>
      </Col>
    </Row>
  );
}
