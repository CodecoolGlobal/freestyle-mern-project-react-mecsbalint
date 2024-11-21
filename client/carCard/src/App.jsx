/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Drawing from "./pages/Drawing/Drawing";
import "bootstrap/dist/css/bootstrap.min.css";
import CollectData from "./pages/CollectData/CollectData";
import HeadLine from "./components/Headline/HeadLine";
import Encounter from "./pages/Encounter/Encounter";
import Result from "./pages/Result/Result";
import { Button } from "bootstrap";

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
  const [currentUser, setCurrentUser] = useState(null);

  async function fetchActiveUser(){
    const response = await fetch("/api/activeuser/");
    if (response.status === 404) {
      return;
    }
    const user = await response.json();
    setCurrentUser(user.userData);
  }

  async function handleLogOut(event) {
    await fetch(`/api/activeuser/${currentUser._id}`, {method: "DELETE"});
    setCurrentUser(null);
  }

  useEffect(() => {
    fetchActiveUser();
  }, []);

  return (
    <>
      {phase != 'start' && phase !== "result" ?
      <HeadLine
        headlineData={headlineData}
        selectedCarAttribute={selectedCarAttribute}
      ></HeadLine>:''
      
      }
      <div className="userBtnsDiv">
        {currentUser ? (
          <div className="userNameDiv">
            {currentUser?.name}
            <button className="btn btn-primary" type="button" onClick={handleLogOut}>Log Out</button>
          </div>
        ) : (
          <>
        <Link to={"/login"}>
          <button className="btn btn-primary">Login</button>
        </Link>
        <Link to={"/registration"}>
          <button className="btn btn-primary">Sign Up</button>
        </Link>
          </>
        )}
      </div>
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
      {phase === "match" && (
        <Encounter
          onChangeHeadlineData={setHeadlineData}
          cards={cards}
          onChangeCards={setCards}
          selectedCarAttribute={selectedCarAttribute}
          onCHangePhase={setPhase}
          onSetSelectedCarAttribute={setSelectedCarAttribute}
        />
      )}
      {phase === "result" && (
        <Result
          onSetIsPlayerTurn={setIsPlayerTurn}
          onSetPhase={setPhase}
          onSetSelectedCarAttribute={setSelectedCarAttribute}
          onSetCards={setCards}
          onSetHeadlineData={setHeadlineData}
          headLineData={headlineData}
          currentUser={currentUser}
        />
      )}
      
    </>
  );
}

export default App;
