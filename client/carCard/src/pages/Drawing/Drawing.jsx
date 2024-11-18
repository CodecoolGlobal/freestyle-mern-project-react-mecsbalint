/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import "./drawing.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";

async function fetchData() {
  const response = await fetch("/api/cards");
  const data = await response.json();
  return data;
}

function Drawing({
  onSetHeadlineData,
  onSetCards,
  onSetPhase
}) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    onSetHeadlineData((prev) => ({
      ...prev, message: 'Generating decks!'
    }))
    setIsLoading(true);
    const data = await fetchData();
    onSetCards((prev) => ({
      ...prev,
      playerCards: data.playerCards,
      aiCards: data.aiCards,
      playerDeck: data.playerDeck,
      aiDeck: data.aiDeck
    }))
    setTimeout(async () => {
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
