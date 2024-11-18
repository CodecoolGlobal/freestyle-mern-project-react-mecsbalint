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
  const [isPlayerTurn, setIsPLayerTurn] = useState(true);

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
    if (["acceleration", "consumption", "weight"].includes(category)) {
      aiSelectedCard[category] - playerSelectedCard[category] > 0
        ? setPlayerScore(() => playerScore + 1)
        : setEnemyScore(() => enemyScore + 1);
    } else {
      playerSelectedCard[category] - aiSelectedCard[category] > 0
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

  function createDummyData() {
    setCategory(
      ["acceleration", "consumption", "weight"][Math.floor(Math.random() * 3)]
    );
    setPlayerSelectedCard(
      yourCards[Math.floor(Math.random() * yourCards.length)]
    );
    setAiSelectedCard(aiCards[Math.floor(Math.random() * aiCards.length)]);
    enemyScore ?? setEnemyScore(0);
    playerScore ?? setPlayerScore(0);
    setPhase("match");
  }

  switch (phase) {
    case "start":
      return (
        <Drawing
          onDrawYourCards={setYourCards}
          onDrawAiCards={setAiCards}
          onDrawYourTalon={setYourTalon}
          onDrawAiTalon={setAiTalon}
          onSetPhase={setPhase}
        />
      );
    case "collect data":
      return <>{createDummyData()}</>;
    case "match":
      return <Encounter onHandleEncounter={handleEncounter} />;
    case "result":
      //Zoli call here
      <>
        <h1>The End</h1>
      </>;
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
