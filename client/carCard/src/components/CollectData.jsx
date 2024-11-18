/* eslint-disable react/prop-types */
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CardMaker from "./CardMaker";
import { useEffect, useState } from "react";

function CollectData({
  yourCards,
  aiHand,
  onSetIsPlayerTurn,
  onSetPlayerSelectedCard,
  onSetAiSelectedCard,
  onSetSelectedCarAttribute,
  onIsPlayerTurn,
  onPlayerSelectedCard,
  onAiSelectedCard,
  onSetPhase,
  onSelectedCarAttribute,
}) {
  const [variableForUseEffect, setVariableForUseEffect] = useState(false);

  function getAiRandomCard() {
    const randomIndex = Math.floor(Math.random() * aiHand.length);
    return aiHand[randomIndex];
  }

  function getBestAttributeCardAtCategory(lowerIsBetterProps) {
    console.log("🚀 ~ getBestAttributeCardAtCategory ~ aiHand:", aiHand);
    return lowerIsBetterProps.includes(onSelectedCarAttribute)
      ? aiHand.sort(
          (a, b) => a[onSelectedCarAttribute] - b[onSelectedCarAttribute]
        )[0]
      : aiHand.sort(
          (a, b) => b[onSelectedCarAttribute] - a[onSelectedCarAttribute]
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
        ? aiHand.sort((a, b) => a[prop.name] - b[prop.name])
        : aiHand.sort((a, b) => b[prop.name] - a[prop.name]);
      carRelativePosition[index].rank = handSorted.indexOf(car);
    });
    const comparisonBase = carRelativePosition.sort(
      (a, b) => a.rank - b.rank
    )[0].name;
    return comparisonBase;
  }

  async function AiTurn() {
    onAiSelectedCard && onPlayerSelectedCard ? onSetPhase("match") : "";
    let car;
    const lowerIsBetterProps = ["acceleration", "consumption", "weight"];
    if (onPlayerSelectedCard) {
      car = getBestAttributeCardAtCategory(lowerIsBetterProps);
      console.log("🚀 ~ AiTurn ~ car:", car);
      onSetAiSelectedCard(car);
    } else {
      car = getAiRandomCard(aiHand);
      console.log("🚀 ~ AiTurn ~ car:", car);
      const aiSelectedAttribute = findBestAttributeOfACard(
        car,
        lowerIsBetterProps
      );
      onSetSelectedCarAttribute(aiSelectedAttribute);
      onSetAiSelectedCard(car);
    }
    onPlayerSelectedCard ? onSetPhase("match") : onSetIsPlayerTurn(true);
  }

  useEffect(() => {
    !onIsPlayerTurn && AiTurn();
  }, [variableForUseEffect]);

  return onIsPlayerTurn ? (
    <Container
      className="col-6 d-flex flex-column justify-content-end align-items-center border"
      style={{ minHeight: "100vh" }}
    >
      <Row className="handdiv justify-content-center">
        {onPlayerSelectedCard ? (
          <CardMaker
            card={onPlayerSelectedCard}
            onSetPlayerSelectedCard={onSetPlayerSelectedCard}
            onSetSelectedCarAttribute={onSetSelectedCarAttribute}
            onSetIsPlayerTurn={onSetIsPlayerTurn}
          ></CardMaker>
        ) : yourCards ? (
          yourCards.map((card, index) => (
            <CardMaker
              key={index}
              card={card}
              onSetPlayerSelectedCard={onSetPlayerSelectedCard}
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
  );
}

export default CollectData;
