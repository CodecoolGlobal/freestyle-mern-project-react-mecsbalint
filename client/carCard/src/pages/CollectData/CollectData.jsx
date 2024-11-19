/* eslint-disable react/prop-types */
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CardMaker from "../../components/CardMaker/CardMaker";
import { useEffect, useState } from "react";
import "./collectData.css";
import Loading from "../../components/Loading/Loading";

function CollectData({
  onSetCards,
  onSetPhase,
  cards,
  selectedCarAttribute,
  onSetSelectedCarAttribute,
  onSetIsPlayerTurn,
  isPlayerTurn,
  onSetHeadlineData,
}) {
  const [variableForUseEffect, setVariableForUseEffect] = useState(false);

  function getAiRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.aiCards.length);
    return cards.aiCards[randomIndex];
  }

  function getBestAttributeCardAtCategory(lowerIsBetterProps) {
    console.log(
      "🚀 ~ getBestAttributeCardAtCategory ~ cards.aiCards:",
      cards.aiCards
    );
    return lowerIsBetterProps.includes(selectedCarAttribute)
      ? cards.aiCards.sort(
          (a, b) => a[selectedCarAttribute] - b[selectedCarAttribute]
        )[0]
      : cards.aiCards.sort(
          (a, b) => b[selectedCarAttribute] - a[selectedCarAttribute]
        )[0];
  }

  function findBestAttributeOfACard(car, lowerIsBetterProps) {
    const carRelativePosition = [
      { name: "acceleration", rank: null },
      { name: "topSpeed", rank: null },
      { name: "cylinders", rank: null },
      { name: "consumption", rank: null },
      { name: "weight", rank: null },
      { name: "horsepower", rank: null },
    ];
    carRelativePosition.forEach((prop, index) => {
      const handSorted = lowerIsBetterProps.includes(prop.name)
        ? cards.aiCards.sort((a, b) => a[prop.name] - b[prop.name])
        : cards.aiCards.sort((a, b) => b[prop.name] - a[prop.name]);
      carRelativePosition[index].rank = handSorted.indexOf(car);
    });
    const comparisonBase = carRelativePosition.sort(
      (a, b) => a.rank - b.rank
    )[0].name;
    return comparisonBase;
  }

  function aiSelecting(car, lowerIsBetterProps) {
    if (cards.playerSelectedCard) {
      onSetHeadlineData((prev) => ({
        ...prev,
        message: "Enemy pick a card!",
      }));
      car = getBestAttributeCardAtCategory(lowerIsBetterProps);
      console.log("🚀 ~ AiTurn ~ car:", car);
      onSetCards((prev) => ({
        ...prev,
        aiSelectedCard: car,
      }));
    } else {
      onSetHeadlineData((prev) => ({
        ...prev,
        message: "Enemy pick a card!",
      }));
      car = getAiRandomCard(cards.aiCards);
      console.log("🚀 ~ AiTurn ~ car:", car);
      const aiSelectedAttribute = findBestAttributeOfACard(
        car,
        lowerIsBetterProps
      );
      setTimeout(() => {
        onSetHeadlineData((prev) => ({
          ...prev,
          message: "Enemy pick attribute!",
        }));
        onSetSelectedCarAttribute(aiSelectedAttribute);
      }, 3000);
      onSetCards((prev) => ({
        ...prev,
        aiSelectedCard: car,
      }));
    }
  }

  async function AiTurn() {
    cards.aiSelectedCard && cards.playerSelectedCard ? onSetPhase("match") : "";
    let car;
    const lowerIsBetterProps = ["acceleration", "consumption", "weight"];

    aiSelecting(car, lowerIsBetterProps);
    setTimeout(() => {
      cards.playerSelectedCard ? onSetPhase("match") : onSetIsPlayerTurn(true);
    }, 4000);
  }

  useEffect(() => {
    !isPlayerTurn && AiTurn();
  }, [variableForUseEffect]);

  useEffect(() => {
    if (isPlayerTurn) {
      if (cards.playerSelectedCard) {
        onSetHeadlineData((prev) => ({
          ...prev,
          message: "Pick an attribute!",
        }));
      } else if (cards.playerCards) {
        onSetHeadlineData((prev) => ({
          ...prev,
          message: "Pick a card!",
        }));
      }
    }
  }, [cards.playerSelectedCard, cards.playerCards, isPlayerTurn]);

  return (
    <Container fluid className="cardGeneratePage" style={{ height: "100vh" }}>
      {isPlayerTurn ? (
        <Container
          fluid
          className="d-flex flex-column"
          style={{ height: "100vh" }}
        >
          <Row className="justify-content-center handDiv">
            {cards.playerSelectedCard ? (
              <CardMaker
                card={cards.playerSelectedCard}
                onSetCards={onSetCards}
                onSetSelectedCarAttribute={onSetSelectedCarAttribute}
                onSetIsPlayerTurn={onSetIsPlayerTurn}
                playerSelectedCard={cards.playerSelectedCard}
                selectedCarAttribute={selectedCarAttribute}
                onSetPhase={onSetPhase}
              />
            ) : cards.playerCards ? (
              cards.playerCards.map((card, index) => (
                <CardMaker
                  key={index}
                  card={card}
                  onSetCards={onSetCards}
                  onSetSelectedCarAttribute={onSetSelectedCarAttribute}
                  onSetIsPlayerTurn={onSetIsPlayerTurn}
                  playerSelectedCard={cards.playerSelectedCard}
                  selectedCarAttribute={selectedCarAttribute}
                  onSetPhase={onSetPhase}
                />
              ))
            ) : null}
          </Row>
        </Container>
      ) : (
        <>
          {variableForUseEffect || setVariableForUseEffect(true)}
          <div className="whitebox mx-auto" style={{ width: "30vh" }}>
            <Loading />
          </div>
        </>
      )}
    </Container>
  );
}

export default CollectData;
