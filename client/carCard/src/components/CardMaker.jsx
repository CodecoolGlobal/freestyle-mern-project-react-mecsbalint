import React from "react";
import "./cardmaker.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Speedometer } from "react-bootstrap-icons";
import { Stopwatch } from "react-bootstrap-icons";
import { FuelPump } from "react-bootstrap-icons";

function CardMaker({ card }) {
  return (
    <Col xs="2" className="handcard">
      <Card data-bs-theme="dark" className="p-2" style={{ width: "15rem" }}>
        <Card.Title className="border border-primary rounded px-2" style={{height: "53px"}}>
          {card.brand}-{card.model}({card.year})
        </Card.Title>
        <Card.Img
          variant="top"
          src={card.img_url}
          className="rounded border"
          style={{ height: "10rem" }}
        />
        <Card.Body>
          <Container className="">
            <Row>
              <Col className="border border-primary rounded m-1 p-1">
                <Container className="">
                  <Row>
                    <Speedometer color="royalblue" size={20} />
                  </Row>
                  <Row className="text-center custom-font-size m-auto">
                    {card.topSpeed + " km/h"}
                  </Row>
                </Container>
              </Col>
              <Col className="border border-primary rounded m-1 p-1">
                <Container>
                  <Row>
                    <Stopwatch color="royalblue" size={20}></Stopwatch>
                  </Row>
                  <Row className="text-center custom-font-size m-auto">
                    {card.acceleration + " s"}
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row className="">
              <Col className="border border-primary rounded m-1 p-1" size="md">
                <Container className="">
                  <Row>
                    <img
                      className="img-icons m-auto"
                      src="../src/assets/cylinders.png"
                    ></img>
                  </Row>
                  <Row className="custom-font-size text-center m-auto middleRowHeightFixer">
                    {card.cylinders}
                  </Row>
                </Container>
              </Col>
              <Col className="border border-primary rounded m-1 p-1" size="md">
                <Container>
                  <Row>
                    <FuelPump color="royalblue" size={20}></FuelPump>
                  </Row>
                  <Row className="custom-font-size text-center">
                    {card.consumption + " L/100KM"}
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row>
              <Col className="border border-primary rounded m-1 p-1" size="md">
                <Container className="">
                  <Row>
                    <img
                      className="img-icons m-auto"
                      src="../src/assets/weight.png"
                    ></img>
                  </Row>
                  <Row className="custom-font-size text-center m-auto">
                    {card.weight + " kg"}
                  </Row>
                </Container>
              </Col>
              <Col className="border border-primary rounded m-1 p-1" size="md">
                <Container className="">
                  <Row>
                    <img
                      className="img-icons m-auto"
                      src="../src/assets/horsepower.png"
                    ></img>
                  </Row>
                  <Row className="custom-font-size text-center m-auto">
                    {card.horsepower + " hp"}
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardMaker;
