import { Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
type HealthProps = {
  wounds: number | undefined;
};
export function Health({ wounds }: HealthProps) {
  return (
    <Row>
      <Col style={{ padding: 0 }}>
        <div>
          <p className="health">
            <img
              className="health"
              src="/icons/health.png"
              width={50}
              height={50}
            />

            {wounds}
          </p>
        </div>
      </Col>
    </Row>
  );
}
