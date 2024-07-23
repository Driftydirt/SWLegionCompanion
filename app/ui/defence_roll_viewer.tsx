import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { DefenceDice } from "./icons/defence_dice";
import { Courage } from "./icons/courage";
import { Health } from "./icons/health";
import { AttackPool } from "./helpers";
import { AttackResults, DefenceResult, DiceRoller } from "../dice_roller";
type DefenceRollViewerProps = {
  defenceResults: DefenceResult;
  colour: "white" | "red";
};

export function DefenceRollViewer({
  defenceResults,
  colour,
}: DefenceRollViewerProps) {
  const [hasBlocks, setHasBlocks] = useState<boolean>(false);
  const [blocks, setBlocks] = useState<number>();

  const [hasSurges, setHasSurges] = useState<boolean>(false);
  const [surges, setSurges] = useState<number>();

  const [hasMisses, setHasMisses] = useState<boolean>(false);
  const [misses, setMisses] = useState<number>();

  useEffect(() => {
    setHasBlocks(defenceResults.block != 0);
    setBlocks(defenceResults.block);
    setHasSurges(defenceResults.surge != 0);
    setSurges(defenceResults.surge);
    setHasMisses(defenceResults.misses != 0);
    setMisses(defenceResults.misses);
  }, [defenceResults]);

  return (
    <>
      {" "}
      {hasBlocks ? (
        <Row>
          {defenceResults.block ? (
            <>
              <Col style={{ display: "flex", marginTop: 8 }}>
                {[...Array(defenceResults.block)].map((index) => (
                  <div key={index} className="defence-dice">
                    <DefenceDice colour={colour} type="Block"></DefenceDice>{" "}
                  </div>
                ))}
              </Col>
              <Col
                sm={{ span: 2 }}
                style={{ display: "flex" }}
                className="ml-auto "
              >
                <img
                  src={"/icons/defence/BlackBlock.png"}
                  width={30}
                  height={30}
                  style={{ height: 30, marginTop: 20 }}
                />
                <p className="icons">{defenceResults.block}</p>
              </Col>
            </>
          ) : null}{" "}
        </Row>
      ) : null}
      {hasSurges ? (
        <Row>
          {defenceResults.surge ? (
            <>
              <Col style={{ display: "flex", marginTop: 8 }}>
                {[...Array(defenceResults.surge)].map((index) => (
                  <div key={index} className="defence-dice">
                    <DefenceDice colour={colour} type="Surge"></DefenceDice>{" "}
                  </div>
                ))}
              </Col>
              <Col
                sm={{ span: 2 }}
                style={{ display: "flex" }}
                className="ml-auto "
              >
                <img
                  src={"/icons/defence/BlackSurge.png"}
                  width={30}
                  height={30}
                  style={{ height: 30, marginTop: 20 }}
                />
                <p className="icons">{defenceResults.surge}</p>
              </Col>
            </>
          ) : null}{" "}
        </Row>
      ) : null}
      {hasMisses ? (
        <Row>
          {defenceResults.misses ? (
            <>
              <Col style={{ display: "flex", marginTop: 8 }}>
                {[...Array(defenceResults.misses)].map((index) => (
                  <div key={index} className="defence-dice">
                    <DefenceDice colour={colour} type="Blank"></DefenceDice>{" "}
                  </div>
                ))}
              </Col>
            </>
          ) : null}{" "}
        </Row>
      ) : null}
    </>
  );
}
