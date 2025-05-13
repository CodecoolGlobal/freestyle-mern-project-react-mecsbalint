/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import "./drawing.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useNavigate, useOutletContext } from "react-router-dom";

async function fetchData() {
  const response = await fetch("/api/cards/");
  const data = await response.json();
  return data;
}

function Drawing() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {setIsHeadlineShown, onSetHeadlineData, onSetCards, currentUser} = useOutletContext();

  useEffect(() => {
    setIsHeadlineShown(false)
  }, [setIsHeadlineShown]);

  async function handleClick() {
    onSetHeadlineData((prev) => ({
      ...prev,
      message: "Generating decks!",
    }));
    setIsLoading(true);
    const data = await fetchData();
    onSetCards((prev) => ({
      ...prev,
      playerCards: data.playerCards,
      aiCards: data.aiCards,
      playerDeck: data.playerDeck,
      aiDeck: data.aiDeck,
    }));
    setTimeout(async () => {
      navigate("/collect-data");
    }, 3000);
  }

  return (
    <Container fluid className="mainBg d-flex">
      <Container fluid className="col-6 justify-content-center my-auto">
      {isLoading ? (
          <Loading></Loading>
        ) : (
          <>
            <Row className="text-center ">
          <div>
            <h1>Car wars</h1>
            <p className={`${currentUser ? "" : "d-none"}`}>Press the start button</p>
          </div>
        </Row>
        <Row>
          <Button
            className={`btn btn-primary start-btn col-4 mx-auto ${currentUser ? "" : "d-none"}`}
            onClick={handleClick}
          >
            Start
          </Button>
        </Row>
          </>
        )}
      </Container>
      <Container className="col-6 startPng">
      </Container>
    </Container>
  );
}

export default Drawing;
