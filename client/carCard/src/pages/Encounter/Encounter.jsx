/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./encounter.css";
import Col from "react-bootstrap/esm/Col";

function updatePlayer(cardsObject, side) {
  cardsObject[side.concat("Cards")].splice(
    cardsObject[side.concat("Cards")].indexOf(
      cardsObject[side.concat("SelectedCard")]
    ),
    1
  );
  cardsObject[side.concat("Deck")].length > 0 &&
    cardsObject[side.concat("Cards")].push(
      ...cardsObject[side.concat("Deck")].splice(0, 1)
    );
  cardsObject[side.concat("SelectedCard")] = null;
}

function updatePlayers(cardsObject, onChangeCards) {
  updatePlayer(cardsObject, "player");
  updatePlayer(cardsObject, "ai");
  onChangeCards(cardsObject);
}

function setScore(cards, onChangeHeadlineData, selectedCarAttribute) {
  if (
    ["acceleration", "consumption", "weight"].includes(selectedCarAttribute)
  ) {
    cards.aiSelectedCard[selectedCarAttribute] -
      cards.playerSelectedCard[selectedCarAttribute] >
    0
      ? onChangeHeadlineData((prev) => ({
          ...prev,
          playerScore: Number(prev.playerScore) + 1,
        }))
      : onChangeHeadlineData((prev) => ({
          ...prev,
          enemyScore: Number(prev.enemyScore) + 1,
        }));
  } else {
    cards.playerSelectedCard[selectedCarAttribute] -
      cards.aiSelectedCard[selectedCarAttribute] >
    0
      ? onChangeHeadlineData((prev) => ({
          ...prev,
          playerScore: Number(prev.playerScore) + 1,
        }))
        : onChangeHeadlineData((prev) => ({
          ...prev,
          enemyScore: Number(prev.enemyScore) + 1,
        }));
  }
}

function Encounter({
  onChangeHeadlineData,
  cards,
  onChangeCards,
  selectedCarAttribute,
  onSetSelectedCarAttribute,
  onCHangePhase,
}) {
  const [playerRoll, setPlayerRoll] = useState(null);
  const [enemyRoll, setEnemyRoll] = useState(null);
  const [roundIsEnded, setRoundIsEnded] = useState(false);
  const [startScoreCalc, setStartScoreCalc] = useState(false);
  const extensionText = {
    topSpeed: " km/h",
    acceleration: " s",
    cylinders: null,
    horsepower: "hp",
    consumption: " L/100km",
    weight: " kg",
  };
  
  useEffect(() => {
    onChangeHeadlineData((prev) => ({
      ...prev,
      playerScore: prev.playerScore ?? 0,
      enemyScore: prev.enemyScore ?? 0,
    }));
    rollEffect(cards.playerSelectedCard[selectedCarAttribute], setPlayerRoll);
    rollEffect(cards.aiSelectedCard[selectedCarAttribute], setEnemyRoll);
    setTimeout(() => {
      setRoundIsEnded(true);
    }, 6000);
    setStartScoreCalc(true);
  }, []);
  
  useEffect(() => {

    startScoreCalc && setTimeout(() => {
      calcScore();
    }, 5000);
    
  }, [startScoreCalc])

  function calcScore() {
    setScore(
      cards,
      onChangeHeadlineData,
      selectedCarAttribute,
      onCHangePhase
    );
  }

  function rollEffect(value, setter) {
    console.log("🚀 ~ rollEffect ~ value:", value);
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const valueCopy = value.toString();
    const fixedChars = [];

    const revealCharacter = (index) => {
      if (index >= valueCopy.length) {
        return; // Ha minden karakter feltárult, kilépünk
      }

      let currentNumIndex = 0;
      const interval = setInterval(() => {
        setter(fixedChars.join("") + nums[currentNumIndex].toString());
        currentNumIndex = (currentNumIndex + 1) % nums.length;
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        fixedChars.push(valueCopy[index]);
        setter(fixedChars.join(""));
        revealCharacter(index + 1);
      }, 1000);
    };

    revealCharacter(0);
  }

  function nextRound() {
    const cardsObject = { ...cards };
    updatePlayers(cardsObject, onChangeCards);
    onSetSelectedCarAttribute(null);
    // cards.playerCards.length === 1
    cards.playerDeck.length === 4
      ? onCHangePhase("result")
      : onCHangePhase("collect data");
  }

  return (
    <>
      <Container
        fluid
        className="mainBg d-flex"
        style={{ height: "100vh" }}
      >
        <Container fluid className="col-5 matchDataDiv text-center">
          <Row>
            <div className="carAttributeText greybox col-4 m-auto my-2">
              {playerRoll}
              {extensionText[selectedCarAttribute]}
            </div>
          </Row>
          <Row>
            <img
              style={{ height: "50vh" }}
              src={cards.playerSelectedCard.img_url}
              className="matchPic"
            ></img>
          </Row>
          <Row>
            <p className="text-center carAttributeText text-dark">{cards.playerSelectedCard.brand}-{cards.playerSelectedCard.model}({cards.playerSelectedCard.year})</p>
          </Row>
        </Container>
        <Container fluid className="col-5 matchDataDiv text-center">
          <Row>
            <div className="carAttributeText greybox col-4 m-auto my-2">
              {enemyRoll}
              {extensionText[selectedCarAttribute]}
            </div>
          </Row>
          <Row>
            <img
              style={{ height: "50vh" }}
              src={cards.aiSelectedCard.img_url}
              className="matchPic"
            ></img>
          </Row>
          <Row>
            <p className="text-center carAttributeText text-dark">{cards.aiSelectedCard.brand}-{cards.aiSelectedCard.model}({cards.aiSelectedCard.year})</p>
          </Row>
        </Container>
      </Container>
      {roundIsEnded ? (
        <Button
          className="nextRoundBtn"
          variant="primary"
          onClick={nextRound}
        >
          {cards.playerCards.length === 1 ? <>See the results</> : <>Next round</> }
        </Button>
      ) : (
        ""
      )}
    </>
  );
}

export default Encounter;
