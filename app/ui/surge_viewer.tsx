import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { DefenceDice } from "./icons/defence_dice";
import { Courage } from "./icons/courage";
import { Health } from "./icons/health";
import { CritSurge } from "./icons/crit_surge";
import { HitSurge } from "./icons/hit_surge";
import { DefenceSurge } from "./icons/defence_surge";
type SurgeViewer = {
  surgeToHit: boolean | undefined;
  surgeToCrit: boolean | undefined;
  surgeToDefend: boolean | undefined;
};

const diceLookup: Record<string, string> = {
  White: "/icons/WhiteDice.png",
  Red: "/icons/RedDice.png",
};
export function SurgeViewer({
  surgeToHit,
  surgeToCrit,
  surgeToDefend,
}: SurgeViewer) {
  return (
    <Row>
      <Col sm={{ span: 5, offset: 7 }} style={{ padding: 5 }}>
        {surgeToCrit ? <CritSurge></CritSurge> : null}
        {surgeToHit ? <HitSurge></HitSurge> : null}
        {surgeToDefend ? <DefenceSurge></DefenceSurge> : null}
      </Col>
    </Row>
  );
}
