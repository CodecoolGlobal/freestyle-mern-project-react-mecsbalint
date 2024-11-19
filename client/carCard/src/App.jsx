/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Drawing from "./pages/Drawing/Drawing";
import "bootstrap/dist/css/bootstrap.min.css";
import CollectData from "./pages/CollectData/CollectData";
import HeadLine from "./components/Headline/HeadLine";
import Encounter from "./pages/Encounter/Encounter";
import Result from "./pages/Result/Result";

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
      {phase === "match" &&  <Encounter
          onChangeHeadlineData={setHeadlineData}
          cards={cards}
          onChangeCards={setCards}
          selectedCarAttribute={selectedCarAttribute}
          onCHangePhase={setPhase}
          onSetSelectedCarAttribute={setSelectedCarAttribute}
      />}
      {phase === "result" && <Result
          onSetIsPlayerTurn={setIsPlayerTurn}
          onSetPhase={setPhase}
          onSetSelectedCarAttribute={setSelectedCarAttribute}
          onSetCards={setCards}
          onSetHeadlineData={setHeadlineData}
          headLineData={headlineData}
      />}
    </>
  );
}

export default App;

