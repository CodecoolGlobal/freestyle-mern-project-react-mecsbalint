/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Drawing from "./components/Drawing";
import "bootstrap/dist/css/bootstrap.min.css";
import CollectData from "./components/CollectData";

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

  switch (phase) {
    case "start":
      //Zoli call here
      return (
        <Drawing
          onDrawYourCards={setYourCards}
          onDrawAiCards={setAiCards}
          onDrawYourTalon={setYourTalon}
          onDrawAiTalon={setAiTalon}
          onSetPhase={setPhase}
        ></Drawing>
      );
    case "collect data":
      // {
      //   (playerSelectedCard && aiSelectedCard && selectedCarAttribute) ? (
      //     setPhase("match")
      //   ) : (
      //     <CollectData
      //       yourCards={yourCards}
      //       aiHand={aiCards}
      //       onSetIsPlayerTurn={setIsPlayerTurn}
      //       onSetPlayerSelectedCard={setPlayerSelectedCard}
      //       onSetAiSelectedCard={setAiSelectedCard}
      //       onSetSelectedCarAttribute={setSelectedCarAttribute}
      //       onIsPlayerTurn={isPlayerTurn}
      //       onPlayerSelectedCard={playerSelectedCard}
      //     ></CollectData>
      //   );
      // }
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
      // Balint call here
      break;
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
