/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import "./drawing.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import HeadLine from "./HeadLine";
import { useState } from "react";
import Loading from "./Loading/Loading";

async function fetchData() {
  const response = await fetch("/api/cards");
  const data = await response.json();
  return data;
}

function Drawing({
  onDrawYourCards,
  onDrawAiCards,
  onDrawYourTalon,
  onDrawAiTalon,
  onSetPhase,
  onSetMessage,
}) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    onSetMessage("Generating decks!");
    setIsLoading(true);
    setTimeout(async () => {
      const data = await fetchData();
      onDrawYourCards(data[0]);
      onDrawAiCards(data[1]);
      onDrawYourTalon(data[2]);
      onDrawAiTalon(data[3]);
      onSetPhase("collect data");
    }, 3000);
  }

  return (
    <Container fluid className="drawingPage" style={{ height: "100vh" }}>
      <Container className="col-6 whitebox mx-auto">
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <>
            <Row className="text-center">
              <div>
                <h1>Car wars</h1>
                <p>Press the start button</p>
              </div>
            </Row>
            <Row>
              <Button
                className="btn btn-primary start-btn col-4 mx-auto"
                onClick={handleClick}
              >
                Start
              </Button>
            </Row>
          </>
        )}
      </Container>
    </Container>
  );
}

export default Drawing;
