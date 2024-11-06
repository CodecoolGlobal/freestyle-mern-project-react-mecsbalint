import { useState } from 'react'
import './App.css'
import Drawing from './components/Drawing'
import CardMaker from "../components/CardMaker";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  const [yourCards, setYourCards] = useState(null);
  const [aiCards, setAiCards] = useState(null);
  const [yourTalon, setYourTalon] = useState(null);
  const [aiTalon, setAiTalon] = useState(null);

  return (
    <>
    <Drawing onDrawYourCards={setYourCards} onDrawAiCards={setAiCards} onDrawYourTalon={setYourTalon} onDrawAiTalon={setAiTalon}></Drawing>
    <Container
        className="col-6 d-flex flex-column justify-content-end align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Row className="handdiv justify-content-center">
          {yourCards ? yourCards.map((card) => <CardMaker card={card} />) : ""}
        </Row>
      </Container>
    </>

  )
}

export default App;
