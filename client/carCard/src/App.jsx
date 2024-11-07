import { useState } from "react";
import "./App.css";
import Drawing from "./components/Drawing";
import CardMaker from "./components/CardMaker";
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
      <div className="container-fluid game-board">
        <div className="top-section">
          <div className="score">
            <div>My score</div>
            <button className="btn btn-primary start-btn">START</button>
            <div>Enemy score</div>
          </div>
        </div>

        <div className="center-line"></div>

        <div className="bottom-section">
          <div>
            <Drawing
              onDrawYourCards={setYourCards}
              onDrawAiCards={setAiCards}
              onDrawYourTalon={setYourTalon}
              onDrawAiTalon={setAiTalon}
            ></Drawing>
            <Container
              className="col-6 d-flex flex-column justify-content-end align-items-center"
              style={{ minHeight: "100vh" }}
            >
              <Row className="handdiv justify-content-center">
                {yourCards
                  ? yourCards.map((card) => <CardMaker card={card} />)
                  : ""}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
