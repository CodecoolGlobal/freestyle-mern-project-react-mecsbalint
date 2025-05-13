/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header/Header";

function App() {
  const [isHeadlineShown, setIsHeadlineShown] = useState(false);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
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
      <div>
        <Header
          isHeadlineShown={isHeadlineShown}
          headlineData={headlineData} 
          selectedCarAttribute={selectedCarAttribute}
          currentUser={currentUser}
          handleLogOut={handleLogOut}
        />
      </div>
      <div>
        <Outlet
          context={{
              setIsHeadlineShown, 
              onSetHeadlineData: setHeadlineData,
              onSetCards: setCards,
              cards,
              selectedCarAttribute,
              onSetSelectedCarAttribute: setSelectedCarAttribute,
              onSetIsPlayerTurn: setIsPlayerTurn,
              isPlayerTurn,
              onChangeHeadlineData: setHeadlineData,
              onChangeCards: setCards,
              headlineData,
              currentUser
          }}
        />
      </div>
    </>
  );
}

export default App;
