import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { DefenceDice } from "./icons/defence_dice";
import { Courage } from "./icons/courage";
import { Health } from "./icons/health";
import { AttackPool } from "./helpers";
import { AttackResults, DiceRoller } from "../dice_roller";
import { AttackDice } from "./icons/attack_dice";
type AttackRollViewerProps = {
  attackResults: AttackResults;
};

export function AttackRollViewer({ attackResults }: AttackRollViewerProps) {
  const [hasCrits, setHasCrits] = useState<boolean>(false);
  const [crits, setCrits] = useState<number>();
  const [hasHits, setHasHits] = useState<boolean>(false);
  const [hits, setHits] = useState<number>();

  const [hasSurges, setHasSurges] = useState<boolean>(false);
  const [surges, setSurges] = useState<number>();

  const [hasMisses, setHasMisses] = useState<boolean>(false);
  const [misses, setMisses] = useState<number>();

  useEffect(() => {
    if (
      attackResults.white.crits != 0 ||
      attackResults.black.crits != 0 ||
      attackResults.red.crits != 0
    ) {
      setHasCrits(true);
      setCrits(
        attackResults.white.crits +
          attackResults.black.crits +
          attackResults.red.crits
      );
    } else setHasCrits(false);
    if (
      attackResults.white.hits != 0 ||
      attackResults.black.hits != 0 ||
      attackResults.red.hits != 0
    ) {
      setHasHits(true);
      setHits(
        attackResults.white.hits +
          attackResults.black.hits +
          attackResults.red.hits
      );
    } else setHasHits(false);
    if (
      attackResults.white.surges != 0 ||
      attackResults.black.surges != 0 ||
      attackResults.red.surges != 0
    ) {
      setHasSurges(true);
      setSurges(
        attackResults.white.surges +
          attackResults.black.surges +
          attackResults.red.surges
      );
    } else setHasSurges(false);
    if (
      attackResults.white.misses != 0 ||
      attackResults.black.misses != 0 ||
      attackResults.red.misses != 0
    ) {
      setHasMisses(true);
      setMisses(
        attackResults.white.misses +
          attackResults.black.misses +
          attackResults.red.misses
      );
    } else setHasMisses(false);
  }, [attackResults]);

  return (
    <>
      {" "}
      {hasCrits ? (
        <Row>
          <Col sm={{ span: 2 }}>
            {" "}
            <p className="totals">Crits: </p>
          </Col>
          {attackResults.white.crits ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="White"></AttackDice>{" "}
                <p className="white">{attackResults.white.crits} </p>
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.crits ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="Black"></AttackDice>{" "}
                <p className="black">{attackResults.black.crits} </p>
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.crits ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="Red"></AttackDice>{" "}
                <p className="red">{attackResults.red.crits} </p>
              </Col>
            </>
          ) : null}{" "}
          <Col sm={{ span: 4 }} className="ml-auto">
            <p>Total Crits: {crits}</p>
          </Col>
        </Row>
      ) : null}
      {hasHits ? (
        <Row>
          <Col sm={{ span: 2 }}>
            {" "}
            <p className="totals">Hits: </p>
          </Col>
          {attackResults.white.hits ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="White"></AttackDice>{" "}
                <p className="white">{attackResults.white.hits} </p>
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.hits ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="Black"></AttackDice>{" "}
                <p className="black">{attackResults.black.hits} </p>
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.hits ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="Red"></AttackDice>{" "}
                <p className="red">{attackResults.red.hits} </p>
              </Col>
            </>
          ) : null}{" "}
          <Col sm={{ span: 4 }} className="ml-auto">
            <p>Total Hits: {hits}</p>
          </Col>
        </Row>
      ) : null}
      {hasSurges ? (
        <Row>
          <Col sm={{ span: 2 }}>
            {" "}
            <p className="totals">Surges: </p>
          </Col>
          {attackResults.white.surges ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="White"></AttackDice>{" "}
                <p className="white">{attackResults.white.surges} </p>
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.surges ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="Black"></AttackDice>{" "}
                <p className="black">{attackResults.black.surges} </p>
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.surges ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="Red"></AttackDice>{" "}
                <p className="red">{attackResults.red.surges} </p>
              </Col>
            </>
          ) : null}{" "}
          <Col sm={{ span: 4 }} className="ml-auto">
            <p>Total Surges: {surges}</p>
          </Col>
        </Row>
      ) : null}
      {hasMisses ? (
        <Row>
          <Col sm={{ span: 2 }}>
            {" "}
            <p className="totals">Misses: </p>
          </Col>
          {attackResults.white.misses ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="White"></AttackDice>{" "}
                <p className="white">{attackResults.white.misses} </p>
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.misses ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="Black"></AttackDice>{" "}
                <p className="black">{attackResults.black.misses} </p>
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.misses ? (
            <>
              <Col sm={{ span: 2 }} style={{ display: "flex" }}>
                <AttackDice colour="Red"></AttackDice>{" "}
                <p className="red">{attackResults.red.misses} </p>
              </Col>
            </>
          ) : null}{" "}
          <Col className="ml-auto" sm={{ span: 4 }}>
            <p>Total Misses: {misses}</p>
          </Col>
        </Row>
      ) : null}
    </>
  );
}
