/* eslint-disable react/prop-types */
import Container from "react-bootstrap/esm/Container";
import "./headline.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function HeadLine({headlineData, selectedCarAttribute}) {
  return (
    <Container fluid className="text-center scoreboard col-8 text-light">
      <Row>
        <Col >{headlineData.playerScore}</Col>
        <Col xs={5} className="mb-2">{headlineData.message}</Col>
        <Col>{headlineData.enemyScore}</Col>
      </Row>
      <Row>
        <Col>{selectedCarAttribute}</Col>
      </Row>
    </Container>
  );
}

export default HeadLine;
