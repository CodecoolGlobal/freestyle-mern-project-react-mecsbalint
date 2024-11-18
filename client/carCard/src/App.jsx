import { useState } from "react";
import "./App.css";
import Drawing from "./components/Drawing";
import CardMaker from "./components/CardMaker";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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
  const [playerSelectedCard, setPlayerSelectedCard] = useState(null);
  const [aiSelectedCard, setAiSelectedCard] = useState(null);
  const [category, setCategory] = useState(null);

  function handleEncounter() {
    
  }

  function createDummyData() {
    setCategory(['acceleration', 'consumption', 'weight'][Math.floor(Math.random() * 3)]);
    setPlayerSelectedCard(yourCards[Math.floor(Math.random() * yourCards.length)]);
    setAiSelectedCard(aiCards[Math.floor(Math.random() * aiCards.length)]);
    setEnemyScore(0);
    setPlayerScore(0);
    setPhase('match');
  }

  switch (phase) {
    case "start":
      return (
        <Drawing onDrawYourCards={setYourCards} onDrawAiCards={setAiCards} onDrawYourTalon={setYourTalon} onDrawAiTalon={setAiTalon} onSetPhase={setPhase}/>
      )
    case "collect data":
      return (
        <>
        {createDummyData()}
        </>
      )
    case "match":
      return (
        <Encounter onHandleEncounter={handleEncounter} enemyScore={enemyScore} playerScore={playerScore} playerSelectedCard={playerSelectedCard} aiSelectedCard={aiSelectedCard} category={category}/>
      )
    case "result":
      //Zoli call here
      break;
  }
}

export default App;

{/* <div className="container-fluid game-board">
  <HeadLine enemyScore={enemyScore} playerScore={playerScore}></HeadLine>

  <div className="center-line"></div>

  <div className="bottom-section">
    <div>
      {phase === "start" ? (
        <Drawing
          onDrawYourCards={setYourCards}
          onDrawAiCards={setAiCards}
          onDrawYourTalon={setYourTalon}
          onDrawAiTalon={setAiTalon}
          onSetPhase={setPhase}
        ></Drawing>
      ) : (
        <Match yourCards={yourCards}></Match>
      )}

    </div>
  </div>
</div> */}