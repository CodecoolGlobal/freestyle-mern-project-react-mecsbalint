import { useState } from "react";
import "./App.css";
import Drawing from "./components/Drawing";
import CardMaker from "./components/CardMaker";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HeadLine from "./components/HeadLine";
import Match from "./components/Match";

function App() {
  const [yourCards, setYourCards] = useState(null);
  const [aiCards, setAiCards] = useState(null);
  const [yourTalon, setYourTalon] = useState(null);
  const [aiTalon, setAiTalon] = useState(null);
  const [enemyScore, setEnemyScore] = useState(null);
  const [playerScore, setPlayerScore] = useState(null);
  const [phase, setPhase] = useState("start");

  switch (phase) {
    case "start":
      //Zoli call here
      break;
    case "collect data":
      // Kristof call here
      break;
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
</div> */
}
