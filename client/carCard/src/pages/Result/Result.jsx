/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Result.css";
import { useNavigate, useOutletContext } from "react-router-dom";

function Result() {
    const [useEffectStopper, setUseEffectStopper] = useState(false);
    const {
        setIsHeadlineShown,
        onSetIsPlayerTurn,
        onSetSelectedCarAttribute,
        onSetCards,
        onSetHeadlineData,
        headlineData,
        currentUser,
    } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        setIsHeadlineShown(false)
    }, [setIsHeadlineShown]);

    useEffect(() => {
        onSetSelectedCarAttribute(" ");
        onSetHeadlineData((prev) => ({
            ...prev,
            message: "",
        }));
        if (useEffectStopper) {
            const updateData = {statistics: {...currentUser.statistics}};
            headlineData.playerScore - headlineData.enemyScore > 0 ? updateData.statistics.win++ : updateData.statistics.loose++;
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
        navigate("/");
    }

    return (
        <div className="resultPageDiv">
        <div className="resultDiv">
            <div className="resultContentBox">
                {headlineData.playerScore - headlineData.enemyScore > 0 ? (
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
