/* eslint-disable react/prop-types */
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CardMaker from "./CardMaker";
import { useState } from "react";

function Match({ yourCards }) {
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [playerSelectedCard, setPlayerSelectedCard] = useState(null);
  const [selectedCarAttribute, setSelectedCarAttribute] = useState(null);
  const [playerValue, setPlayerValue] = useState(null);

  function handleClick(event, card, attString, attValue) {
    playerSelectedCard != null
      ? attString != undefined
        ? setSelectedCarAttribute(attString) && setPlayerValue(attValue)
        : ""
      : setPlayerSelectedCard(card);
  }

  return isPlayerTurn ? (
    <Container
      className="col-6 d-flex flex-column justify-content-end align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="handdiv justify-content-center">
        {playerSelectedCard ? (
          <CardMaker
            card={playerSelectedCard}
            onHandleClick={handleClick}
          ></CardMaker>
        ) : yourCards ? (
          yourCards.map((card, index) => (
            <CardMaker key={index} card={card} onHandleClick={handleClick} />
          ))
        ) : (
          ""
        )}
      </Row>
    </Container>
  ) : (
    ""
  );
}

export default Match;
