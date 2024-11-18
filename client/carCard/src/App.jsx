/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Drawing from "./components/Drawing";
import "bootstrap/dist/css/bootstrap.min.css";
import CollectData from "./components/CollectData";
import HeadLine from "./components/HeadLine";
import Encounter from "./components/Encounter";

function App() {
  const [yourCards, setYourCards] = useState(null);
  const [aiCards, setAiCards] = useState(null);
  const [yourTalon, setYourTalon] = useState(null);
  const [aiTalon, setAiTalon] = useState(null);
  const [enemyScore, setEnemyScore] = useState(null);
  const [playerScore, setPlayerScore] = useState(null);
  const [phase, setPhase] = useState("start");
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [playerSelectedCard, setPlayerSelectedCard] = useState(null);
  const [aiSelectedCard, setAiSelectedCard] = useState(null);
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

  useEffect(() => {
    <HeadLine
      playerScore={playerScore}
      enemyScore={enemyScore}
      message={message}
    ></HeadLine>;
  }, [message]);

  switch (phase) {
    case "start":
      return (
        <>
          <HeadLine
            playerScore={playerScore}
            enemyScore={enemyScore}
            message={message}
          ></HeadLine>
          <Drawing
            onDrawYourCards={setYourCards}
            onDrawAiCards={setAiCards}
            onDrawYourTalon={setYourTalon}
            onDrawAiTalon={setAiTalon}
            onSetPhase={setPhase}
            onSetMessage={setMessage}
          ></Drawing>
        </>
      );
    case "collect data":
      return (
        <CollectData
          yourCards={yourCards}
          aiHand={aiCards}
          onSetIsPlayerTurn={setIsPlayerTurn}
          onSetPlayerSelectedCard={setPlayerSelectedCard}
          onSetAiSelectedCard={setAiSelectedCard}
          onSetSelectedCarAttribute={setSelectedCarAttribute}
          onIsPlayerTurn={isPlayerTurn}
          onPlayerSelectedCard={playerSelectedCard}
          onAiSelectedCard={aiSelectedCard}
          onSetPhase={setPhase}
          onSelectedCarAttribute={selectedCarAttribute}
        />
      );
    case "match":
      return (
        <Encounter
          onChangeHeadlineData={setHeadlineData}
          cards={cards}
          onChangeCards={setCards}
          selectedCarAttribute={selectedCarAttribute}
          onCHangePhase={setPhase}
        />
      );

    case "result":
      //Zoli call here
      break;
  }
}

export default App;

{
  /* <div className="container-fluid game-board">
  <HeadLine enemyScore={enemyScore} playerScore={playerScore}></HeadLine>

  <div className="center-line"></div>

  <div className="bottom-section">
    <div>
      {phase === "start" ? (

      ) : (
        <Match yourCards={yourCards}></Match>
      )}

    </div>
  </div>
</div> */
}
