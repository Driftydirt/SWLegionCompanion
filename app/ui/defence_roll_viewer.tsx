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
          <Col sm={{ span: 4 }}>
            {" "}
            <p className="totals">Blocks: </p>
          </Col>
          {defenceResults.block ? (
            <>
              <Col sm={{ span: 3 }} style={{ display: "flex" }}>
                <p className={colour}>{defenceResults.block} </p>

                <div className="defence-dice">
                  <DefenceDice colour={colour}></DefenceDice>{" "}
                </div>
              </Col>
            </>
          ) : null}{" "}
        </Row>
      ) : null}
      {hasSurges ? (
        <Row>
          <Col sm={{ span: 4 }}>
            {" "}
            <p className="totals">Surges: </p>
          </Col>
          {defenceResults.surge ? (
            <>
              <Col sm={{ span: 3 }} style={{ display: "flex" }}>
                <p className={colour}>{defenceResults.surge} </p>

                <div className="defence-dice">
                  <DefenceDice colour={colour}></DefenceDice>{" "}
                </div>
              </Col>
            </>
          ) : null}{" "}
        </Row>
      ) : null}
      {hasMisses ? (
        <Row>
          <Col sm={{ span: 4 }}>
            {" "}
            <p className="totals">Misses: </p>
          </Col>
          {defenceResults.misses ? (
            <>
              <Col sm={{ span: 3 }} style={{ display: "flex" }}>
                <p className={colour}>{defenceResults.misses} </p>

                <div className="defence-dice">
                  <DefenceDice colour={colour}></DefenceDice>{" "}
                </div>
              </Col>
            </>
          ) : null}{" "}
        </Row>
      ) : null}
    </>
  );
}
