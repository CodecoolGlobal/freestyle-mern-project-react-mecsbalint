/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Drawing from "./components/Drawing";
import "bootstrap/dist/css/bootstrap.min.css";
import CollectData from "./components/CollectData";
import HeadLine from "./components/HeadLine";
import Match from "./components/Match";
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
  const [message, setMessage] = useState('Start the game');

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
    if (["acceleration", "consumption", "weight"].includes(selectedCarAttribute)) {
      aiSelectedCard[selectedCarAttribute] - playerSelectedCard[selectedCarAttribute] > 0
        ? setPlayerScore(() => playerScore + 1)
        : setEnemyScore(() => enemyScore + 1);
    } else {
      playerSelectedCard[selectedCarAttribute] - aiSelectedCard[selectedCarAttribute] > 0
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

  useEffect(() => {
     <HeadLine playerScore={playerScore} enemyScore={enemyScore} message={message}></HeadLine>
  }, [message])

  switch (phase) {
    case "start":
      return (
        <>
        <HeadLine playerScore={playerScore} enemyScore={enemyScore} message={message}></HeadLine>
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
      return <Encounter onHandleEncounter={handleEncounter} />;
      
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
