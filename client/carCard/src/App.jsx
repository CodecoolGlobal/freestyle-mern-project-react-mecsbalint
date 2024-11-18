/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Drawing from "./pages/Drawing/Drawing";
import "bootstrap/dist/css/bootstrap.min.css";
import CollectData from "./pages/CollectData/CollectData";
import HeadLine from "./components/Headline/HeadLine";
import Encounter from "./components/Encounter";

function App() {
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [phase, setPhase] = useState("start");
  const [selectedCarAttribute, setSelectedCarAttribute] = useState(null);
  const [cards, setCards] = useState({
    playerCards: [],
    aiCards: [],
    playerDeck: [],
    aiDeck: [],
    playerSelectedCard: null,
    aiSelectedCard: null,
  });
  const [headlineData, setHeadlineData] = useState({
    enemyScore: null,
    playerScore: null,
    message: "Start game",
  });

  function updateCards() {
    const yourCardsTest = [...yourCards];
    const aiCardsTest = [...aiCards];
    const yourTalonTest = [...yourTalon];
    const aiTalonTest = [...aiTalon];
    yourCardsTest.splice(yourCardsTest.indexOf(playerSelectedCard), 1);
    aiCardsTest.splice(aiCardsTest.indexOf(aiSelectedCard), 1);
    yourTalonTest.length > 0 &&
      yourCardsTest.push(...yourTalonTest.splice(0, 1));
    aiTalonTest.length > 0 && aiCardsTest.push(...aiTalonTest.splice(0, 1));
    setAiCards(null);
    setPlayerSelectedCard(null);
    setYourCards(yourCardsTest);
    setAiCards(aiCardsTest);
    setYourTalon(yourTalonTest);
    setAiTalon(aiTalonTest);
  }

  function handleEncounter() {
    if (
      ["acceleration", "consumption", "weight"].includes(selectedCarAttribute)
    ) {
      aiSelectedCard[selectedCarAttribute] -
        playerSelectedCard[selectedCarAttribute] >
      0
        ? setPlayerScore(() => playerScore + 1)
        : setEnemyScore(() => enemyScore + 1);
    } else {
      playerSelectedCard[selectedCarAttribute] -
        aiSelectedCard[selectedCarAttribute] >
      0
        ? setPlayerScore(() => playerScore + 1)
        : setEnemyScore(() => enemyScore + 1);
    }
    if (yourCards.length === 1) {
      setPhase("result");
    } else {
      updateCards();
      setPhase("collect data");
    }
  }

  return (
    <>
      <HeadLine headlineData={headlineData}></HeadLine>
      {phase === "start" && (
        <Drawing
          onSetHeadlineData={setHeadlineData}
          onSetCards={setCards}
          onSetPhase={setPhase}
        ></Drawing>
      )}
      {phase === "collect data" && (
        <CollectData
          onSetHeadlineData={setHeadlineData}
          onSetCards={setCards}
          onSetPhase={setPhase}
          cards={cards}
          selectedCarAttribute={selectedCarAttribute}
          onSetSelectedCarAttribute={setSelectedCarAttribute}
          onSetIsPlayerTurn={setIsPlayerTurn}
          isPlayerTurn={isPlayerTurn}
        ></CollectData>
      )}
    </>
  );
}

export default App;

