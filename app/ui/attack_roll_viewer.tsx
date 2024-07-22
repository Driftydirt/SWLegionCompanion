import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { DefenceDice } from "./icons/defence_dice";
import { Courage } from "./icons/courage";
import { Health } from "./icons/health";
import { AttackPool } from "./helpers";
import { AttackDice, AttackResults, DiceRoller } from "../dice_roller";
import { AttackDiceViewer } from "./icons/attack_dice_viewer";
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

  const [diceArray, setDiceArray] = useState<AttackDice[]>();

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
      <Row>
        <Col sm={{ span: 2 }} className="ml-auto">
          <p className="totals">Totals </p>
        </Col>
      </Row>
      {hasCrits ? (
        <Row>
          <Col sm={{ span: 2 }}> </Col>
          {attackResults.white.crits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.white.crits)].map((index) => (
                  <AttackDiceViewer
                    key={index}
                    colour="White"
                    type="Crit"
                  ></AttackDiceViewer>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.crits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.black.crits)].map((index) => (
                  <>
                    <AttackDiceViewer
                      key={index}
                      colour="Black"
                      type="Crit"
                    ></AttackDiceViewer>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.crits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.red.crits)].map((index) => (
                  <>
                    <AttackDiceViewer
                      key={index}
                      colour="Red"
                      type="Crit"
                    ></AttackDiceViewer>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          <Col
            sm={{ span: 2 }}
            style={{ display: "flex" }}
            className="ml-auto "
          >
            <img
              className="attack-dice"
              src={"/icons/attack/BlackCrit.png"}
              width={30}
              height={30}
              style={{ height: 30, marginTop: 20 }}
            />
            <p className="icons">{crits}</p>
          </Col>
        </Row>
      ) : null}
      {hasHits ? (
        <Row>
          <Col sm={{ span: 2 }}> </Col>
          {attackResults.white.hits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.white.hits)].map((index) => (
                  <>
                    <AttackDiceViewer
                      key={index}
                      colour="White"
                      type="Hit"
                    ></AttackDiceViewer>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.hits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.black.hits)].map((index) => (
                  <>
                    <AttackDiceViewer
                      key={index}
                      colour="Black"
                      type="Hit"
                    ></AttackDiceViewer>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.hits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.red.hits)].map((index) => (
                  <>
                    <AttackDiceViewer
                      key={index}
                      colour="Red"
                      type="Hit"
                    ></AttackDiceViewer>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          <Col
            sm={{ span: 2 }}
            style={{ display: "flex" }}
            className="ml-auto "
          >
            <img
              className="attack-dice"
              src={"/icons/attack/BlackHit.png"}
              width={30}
              height={30}
              style={{ height: 30, marginTop: 20 }}
            />
            <p className="icons">{hits}</p>
          </Col>
        </Row>
      ) : null}
      {hasSurges ? (
        <Row>
          <Col sm={{ span: 2 }}> </Col>
          {attackResults.white.surges ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.white.surges)].map((index) => (
                  <>
                    <AttackDiceViewer
                      key={index}
                      colour="White"
                      type="Surge"
                    ></AttackDiceViewer>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.surges ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.black.surges)].map((index) => (
                  <>
                    <AttackDiceViewer
                      key={index}
                      colour="Black"
                      type="Surge"
                    ></AttackDiceViewer>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.surges ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.red.surges)].map((index) => (
                  <>
                    <AttackDiceViewer
                      key={index}
                      colour="Red"
                      type="Surge"
                    ></AttackDiceViewer>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          <Col
            sm={{ span: 2 }}
            style={{ display: "flex" }}
            className="ml-auto "
          >
            <img
              className="attack-dice"
              src={"/icons/attack/BlackAttackSurge.png"}
              width={30}
              height={30}
              style={{ height: 30, marginTop: 20 }}
            />
            <p className="icons">{surges}</p>
          </Col>
        </Row>
      ) : null}
      {hasMisses ? (
        <Row>
          <Col sm={{ span: 2 }}> </Col>
          {attackResults.white.misses ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.white.misses)].map((index) => (
                  <>
                    <AttackDiceViewer
                      key={index}
                      colour="White"
                      type={undefined}
                    ></AttackDiceViewer>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.misses ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.black.misses)].map((index) => (
                  <>
                    <AttackDiceViewer
                      key={index}
                      colour="Black"
                      type={undefined}
                    ></AttackDiceViewer>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.misses ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.red.misses)].map((index) => (
                  <>
                    <AttackDiceViewer
                      key={index}
                      colour="Red"
                      type={undefined}
                    ></AttackDiceViewer>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
        </Row>
      ) : null}
      {}
    </>
  );
}
