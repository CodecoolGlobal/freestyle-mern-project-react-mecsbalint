/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

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
