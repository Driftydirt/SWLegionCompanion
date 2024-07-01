import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
type CourageProps = {
  courage: number | undefined;
};
export function Courage({ courage }: CourageProps) {
  return (
    <Row>
      <Col style={{ padding: 0 }}>
        <div>
          <p className="courage">
            <img
              className="courage"
              src="/icons/courage.png"
              width={50}
              height={50}
            />

            {courage}
          </p>
        </div>
      </Col>
    </Row>
  );
}
