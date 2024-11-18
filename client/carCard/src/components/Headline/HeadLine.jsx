/* eslint-disable react/prop-types */
import Container from "react-bootstrap/esm/Container";
import "./headline.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function HeadLine({headlineData}) {
  return (
    <Container fluid className="text-center scoreboard col-6 text-light">
      <Row>
        <Col>{headlineData.playerScore}</Col>
        <Col xs={6}>{headlineData.message}</Col>
        <Col>{headlineData.enemyScore}</Col>
      </Row>
    </Container>
  );
}

export default HeadLine;
