import { useEffect } from "react";

function Result({
    onSetIsPlayerTurn,
    onSetPhase,
    onSetSelectedCarAttribute,
    onSetCards,
    onSetHeadlineData,
    headLineData,
}) {

    useEffect(() => {
        onSetHeadlineData((prev) => ({
            ...prev,
            message: "",
        }));
    }, []);

    function resetValues() {
        onSetIsPlayerTurn(true);
        onSetSelectedCarAttribute(null);
        onSetCards({
            playerCards: [],
            aiCards: [],
            playerDeck: [],
            aiDeck: [],
            playerSelectedCard: null,
            aiSelectedCard: null,
          });
        onSetHeadlineData({
            enemyScore: null,
            playerScore: null,
            message: "start",
          });
    }

    function handleNewGameClick() {
        resetValues();
        onSetPhase("start");
    }

    return (
        <div className="resultDiv">
        {headLineData.playerScore - headLineData.enemyScore > 0 ? (
            <p>Nyertél</p>
        ) : (
            <p>Vesztettél LOOOSER</p>
        )}
        <button type="button" onClick={handleNewGameClick}>Back to the main page</button>
        </div>
    )
}

export default Result;
