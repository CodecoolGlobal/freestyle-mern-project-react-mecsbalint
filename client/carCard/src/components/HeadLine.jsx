/* eslint-disable react/prop-types */
import "./headline.css";

function HeadLine({enemyScore, playerScore}) {
  return (
    <div className="top-section">
      <div className="score">
        <div>{playerScore ? playerScore : ""}</div>
        <div>{enemyScore ? enemyScore : ""}</div>
      </div>
    </div>
  );
}

export default HeadLine;
