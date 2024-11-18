/* eslint-disable react/prop-types */
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CardMaker from "../../components/CardMaker/CardMaker";
import { useEffect, useState } from "react";
import './collectData.css';

function CollectData({
  onSetCards,
  onSetPhase,
  cards,
  selectedCarAttribute,
  onSetSelectedCarAttribute,
  onSetIsPlayerTurn,
  isPlayerTurn,
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

  async function AiTurn() {
    cards.aiSelectedCard && cards.playerSelectedCard ? onSetPhase("match") : "";
    let car;
    const lowerIsBetterProps = ["acceleration", "consumption", "weight"];
    if (cards.playerSelectedCard) {
      car = getBestAttributeCardAtCategory(lowerIsBetterProps);
      console.log("🚀 ~ AiTurn ~ car:", car);
      onSetCards((prev) => ({
        ...prev,
        aiSelectedCard: car,
      }));
    } else {
      car = getAiRandomCard(cards.aiCards);
      console.log("🚀 ~ AiTurn ~ car:", car);
      const aiSelectedAttribute = findBestAttributeOfACard(
        car,
        lowerIsBetterProps
      );
      onSetSelectedCarAttribute(aiSelectedAttribute);
      onSetCards((prev) => ({
        ...prev,
        aiSelectedCard: car,
      }));
    }
    cards.playerSelectedCard ? onSetPhase("match") : onSetIsPlayerTurn(true);
  }

  useEffect(() => {
    !isPlayerTurn && AiTurn();
  }, [variableForUseEffect]);

  return (
    <Container fluid className="cardGeneratePage" style={{ height: "100vh" }}>
      {isPlayerTurn ? (
        <Container
          className="d-flex flex-column justify-content-end align-items-center"
        >
          <Row className="handdiv justify-content-center">
            {cards.playerSelectedCard ? (
              <CardMaker
                card={cards.playerSelectedCard}
                onSetCards={onSetCards}
                onSetSelectedCarAttribute={onSetSelectedCarAttribute}
                onSetIsPlayerTurn={onSetIsPlayerTurn}
              ></CardMaker>
            ) : cards.playerCards ? (
              cards.playerCards.map((card, index) => (
                <CardMaker
                  key={index}
                  card={card}
                  onSetCards={onSetCards}
                  onSetSelectedCarAttribute={onSetSelectedCarAttribute}
                />
              ))
            ) : (
              ""
            )}
          </Row>
        </Container>
      ) : (
        !variableForUseEffect && setVariableForUseEffect(true)
      )}
      ;
    </Container>
  );
}

export default CollectData;
