/* eslint-disable react/prop-types */
import Container from "react-bootstrap/esm/Container";
import "./headline.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useEffect, useState } from "react";

function HeadLine({headlineData, selectedCarAttribute}) {
  const [displayVersion, setDisplayVersion] = useState(null);

  function getAttributeDisplayVersion(){
      const letters = [selectedCarAttribute[0].toUpperCase()];
      for (let i = 1; i<selectedCarAttribute.length; i++) {
        if(selectedCarAttribute[i] === selectedCarAttribute[i].toLowerCase()){
          letters.push(selectedCarAttribute[i]);
        } else {
          letters.push(` ${selectedCarAttribute[i].toLowerCase()}`);
        }
      }
      console.log("🚀 ~ getAttributeDisplayVersion ~ letters:", letters.join(''))
       setDisplayVersion(letters.join(''));
  }
  useEffect(() => {
    selectedCarAttribute && getAttributeDisplayVersion();
  }, [selectedCarAttribute])
  return (
    <Container fluid className="text-center scoreboard col-8 text-light">
      <Row>
        <Col >{headlineData.playerScore}</Col>
        <Col xs={5} className="mb-2">{headlineData.message}</Col>
        <Col>{headlineData.enemyScore}</Col>
      </Row>
      <Row>
        <Col className="mt-4">{displayVersion}</Col>
      </Row>
    </Container>
  );
}

export default HeadLine;
