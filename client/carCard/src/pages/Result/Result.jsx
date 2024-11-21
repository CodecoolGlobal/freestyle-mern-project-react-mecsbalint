/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Result.css";

function Result({
    onSetIsPlayerTurn,
    onSetPhase,
    onSetSelectedCarAttribute,
    onSetCards,
    onSetHeadlineData,
    headLineData,
    currentUser,
}) {
    const [useEffectStopper, setUseEffectStopper] = useState(false);

    useEffect(() => {
        onSetSelectedCarAttribute(" ");
        onSetHeadlineData((prev) => ({
            ...prev,
            message: "",
        }));
        if (useEffectStopper) {
            const updateData = {statistics: {...currentUser.statistics}};
            headLineData.playerScore - headLineData.enemyScore > 0 ? updateData.statistics.win++ : updateData.statistics.loose++;
            fetch(`/api/users/${currentUser._id}`, {method: "PATCH", headers: {"Content-Type": "application/json"}, body: JSON.stringify(updateData)});
        }
        setUseEffectStopper(true);
    }, [useEffectStopper]);

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
        <div className="resultPageDiv">
        <div className="resultDiv">
            <div className="resultContentBox">
                {headLineData.playerScore - headLineData.enemyScore > 0 ? (
                    <p>You Win!</p>
                ) : (
                    <p>You Lost!</p>
                )}
                <button type="button" className="btn btn-primary" onClick={handleNewGameClick}>Back to the main page</button>
            </div>
        </div>
        <div className="resultCarDiv">
            <img className="resultCarImg" src="https://pngimg.com/uploads/mercedes/mercedes_PNG1903.png"></img>
        </div>
        </div>
    )
}

export default Result;
