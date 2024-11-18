import Button from "react-bootstrap/Button";
import "./drawing.css";

async function fetchData() {
  const response = await fetch('/api/cards');
  const data = await response.json();
  return data;
}

function Drawing({onDrawYourCards, onDrawAiCards, onDrawYourTalon, onDrawAiTalon, onSetPhase}) {
    async function handleClick() {
      const data = await fetchData()
      onDrawYourCards(data[0]);
      onDrawAiCards(data[1]);
      onDrawYourTalon(data[2]);
      console.log(data[0])
      onDrawAiTalon(data[3]);
      onSetPhase("collect data");
    }

    return(<Button className="btn btn-primary start-btn" onClick={handleClick}>Start</Button>)
      
}

export default Drawing