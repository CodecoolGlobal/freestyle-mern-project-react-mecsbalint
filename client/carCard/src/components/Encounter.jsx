/* eslint-disable react/prop-types */
import { useEffect } from "react";

function updatePlayer(cardsObject, side) {
    cardsObject[side.concat("Cards")].splice(cardsObject[side.concat("Cards")].indexOf(cardsObject[side.concat("SelectedCard")]), 1);
    cardsObject[side.concat("Deck")].length > 0 && cardsObject[side.concat("Cards")].push(...cardsObject[side.concat("Deck")].splice(0, 1));
    cardsObject[side.concat("SelectedCard")] = null;
}

function updatePlayers(cardsObject, onChangeCards) {
    updatePlayer(cardsObject, "player");
    updatePlayer(cardsObject, "ai");
    onChangeCards(cardsObject);
  }

function setScore(cards, onChangeHeadlineData, selectedCarAttribute) {
    if (["acceleration", "consumption", "weight"].includes(selectedCarAttribute)) {
      cards.aiSelectedCard[selectedCarAttribute] - cards.playerSelectedCard[selectedCarAttribute] > 0
        ? onChangeHeadlineData((prev) => ({...prev, playerScore: prev.playerscore++}))
        : onChangeHeadlineData((prev) => ({...prev, enemyScore: prev.enemyScore++}))
    } else {
      cards.playerSelectedCard[selectedCarAttribute] - cards.aiSelectedCard[selectedCarAttribute] > 0
      ? onChangeHeadlineData((prev) => ({...prev, enemyScore: prev.enemyScore++}))
      : onChangeHeadlineData((prev) => ({...prev, playerScore: prev.playerscore++}))
  }
}

function Encounter({onChangeHeadlineData, cards, onChangeCards, selectedCarAttribute, onCHangePhase}) {

    useEffect(() => {
        const cardsObject = {...cards};
        setScore(cardsObject, onChangeHeadlineData, selectedCarAttribute, onCHangePhase);
        updatePlayers(cardsObject, onChangeCards);
        cards.playerCards.length === 1 ? onCHangePhase("result") : onCHangePhase("collect data");
    }, []);

    return (
        <>
        <h1>Encounter test</h1>
        </>
    )
}

export default Encounter;
