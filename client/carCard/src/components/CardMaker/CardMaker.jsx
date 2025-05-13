/* eslint-disable react/prop-types */
import "./cardmaker.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Speedometer } from "react-bootstrap-icons";
import { Stopwatch } from "react-bootstrap-icons";
import { FuelPump } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";


function CardMaker({
  card,
  onSetCards,
  onSetSelectedCarAttribute,
  onSetIsPlayerTurn,
  selectedCarAttribute,
}) {
  const navigate = useNavigate();

  function handleAttributeClick(attribute= ''){
    console.log("🚀 ~ handleClick ~ attribute:", attribute)
    onSetSelectedCarAttribute(attribute);
    onSetIsPlayerTurn(false);
  }

  function handleCardClick(){
    if(selectedCarAttribute){
      onSetCards((prev) => ({
        ...prev,
        playerSelectedCard: card
      }))
      navigate('/encounter');
      return;
    }else {
      onSetCards((prev) => ({
        ...prev,
        playerSelectedCard: card
      }))
    }
  }
  return (
    <Col style={{width:'15rem'}}  className="handcard">
      <Card
        data-bs-theme="dark"
        className="p-2 mx-auto"
        onClick={handleCardClick}
        style={{width: '16rem'}}
      >
        <Card.Title
          className="border border-primary rounded px-2 text-center "
          style={{ height: "53px" }}
        >
          {card.brand}-{card.model}({card.year})
        </Card.Title>
        <Card.Img
          variant="top"
          src={card.img_url}
          className="rounded border"
          style={{ height: "10rem" }}
        />
        <Card.Body>
          <Container className="justify-content-center text-center">
            <Row>
              <Col
                className="border border-primary rounded m-1 p-1"
                onClick={() => {
                  handleAttributeClick("topSpeed");
                }}
              >
                <Container className="">
                  <Row>
                    <Speedometer color="royalblue" size={20} />
                  </Row>
                  <Row className="text-center custom-font-size m-auto">
                    <Col>{card.topSpeed + " km/h"} </Col>
                  </Row>
                </Container>
              </Col>
              <Col
                className="border border-primary rounded m-1 p-1"
                onClick={() => {
                  handleAttributeClick("acceleration");
                }}
              >
                <Container>
                  <Row>
                    <Stopwatch color="royalblue" size={20}></Stopwatch>
                  </Row>
                  <Row className="text-center custom-font-size m-auto">
                    <Col>{card.acceleration + " s"} </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row className="">
              <Col
                className="border border-primary rounded m-1 p-1"
                onClick={() => {
                  handleAttributeClick("cylinders");
                }}
              >
                <Container className="">
                  <Row>
                    <img
                      className="img-icons m-auto"
                      src="../src/assets/cylinders.png"
                    ></img>
                  </Row>
                  <Row className="custom-font-size text-center m-auto middleRowHeightFixer">
                  <Col>{card.cylinders} </Col>
                  </Row>
                </Container>
              </Col>
              <Col
                className="border border-primary rounded m-1 p-1"
                onClick={() => {
                  handleAttributeClick("consumption");
                }}
              >
                <Container>
                  <Row>
                    <FuelPump color="royalblue" size={20}></FuelPump>
                  </Row>
                  <Row className="custom-font-size text-center">
                  <Col>{card.consumption + " L/100KM"}</Col>
                    
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row>
              <Col
                className="border border-primary rounded m-1 p-1"
                onClick={() => {
                  handleAttributeClick("weight");
                }}
              >
                <Container className="">
                  <Row>
                    <img
                      className="img-icons m-auto"
                      src="../src/assets/weight.png"
                    ></img>
                  </Row>
                  <Row className="custom-font-size text-center m-auto">
                  <Col>{card.weight + " kg"}</Col>
                    
                  </Row>
                </Container>
              </Col>
              <Col
                className="border border-primary rounded m-1 p-1"
                onClick={() => {
                  handleAttributeClick("horsepower");
                }}
              >
                <Container className="">
                  <Row>
                    <img
                      className="img-icons m-auto"
                      src="../src/assets/horsepower.png"
                    ></img>
                  </Row>
                  <Row className="custom-font-size text-center m-auto">
                  <Col>{card.horsepower + " hp"}</Col>
                    
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardMaker;
