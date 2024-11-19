
function Result({
    onSetIsPlayerTurn,
    onSetPhase,
    onSetSelectedCarAttribute,
    onSetCards,
    onSetHeadlineData,
    onHeadLineData,
}) {


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
            message: "Start game",
          });
    }

    return (
        <p>helóka resultka</p>
    )
}

export default Result;
