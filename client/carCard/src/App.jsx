import { useEffect, useState } from "react";
import "./App.css";
import CardMaker from "../components/CardMaker";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  const [myDeck, setMyDeck] = useState(null);
  async function getDataFromServer(url) {
    const data = await fetch(url).then((response) => response.json());
    console.log(data);
  }

  useEffect(() => {
    setMyDeck([
      {
        _id: {
          $oid: "6729f0072b57d1ea86bdb31e",
        },
        brand: "BMW",
        model: "M3",
        acceleration: 4.1,
        topSpeed: 250,
        cylinders: 6,
        consumption: 8.8,
        weight: 1585,
        horsepower: 425,
        year: 2015,
        img_url:
          "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/35Xel1oP-cc0THCW_tT-(edit).jpg?t=169024469981",
        __v: 0,
      },
      {
        _id: {
          $oid: "6729f0072b57d1ea86bdb321",
        },
        brand: "Audi",
        model: "A4 2.0 TFSI",
        acceleration: 6.1,
        topSpeed: 240,
        cylinders: 4,
        consumption: 7.1,
        weight: 1470,
        horsepower: 252,
        year: 2017,
        img_url:
          "https://assets.adac.de/image/upload/v1/Autodatenbank/Fahrzeugbilder/im03382-1-audi-a4.jpg",
        __v: 0,
      },
      {
        _id: {
          $oid: "6729f0072b57d1ea86bdb321",
        },
        brand: "Audi",
        model: "A4 2.0 TFSI",
        acceleration: 6.1,
        topSpeed: 240,
        cylinders: 4,
        consumption: 7.1,
        weight: 1470,
        horsepower: 252,
        year: 2017,
        img_url:
          "https://assets.adac.de/image/upload/v1/Autodatenbank/Fahrzeugbilder/im03382-1-audi-a4.jpg",
        __v: 0,
      },
      {
        _id: {
          $oid: "6729f0072b57d1ea86bdb321",
        },
        brand: "Audi",
        model: "A4 2.0 TFSI",
        acceleration: 6.1,
        topSpeed: 240,
        cylinders: 4,
        consumption: 7.1,
        weight: 1470,
        horsepower: 252,
        year: 2017,
        img_url:
          "https://assets.adac.de/image/upload/v1/Autodatenbank/Fahrzeugbilder/im03382-1-audi-a4.jpg",
        __v: 0,
      },
      {
        _id: {
          $oid: "6729f0072b57d1ea86bdb321",
        },
        brand: "Audi",
        model: "A4 2.0 TFSI",
        acceleration: 6.1,
        topSpeed: 240,
        cylinders: 4,
        consumption: 7.1,
        weight: 1470,
        horsepower: 252,
        year: 2017,
        img_url:
          "https://assets.adac.de/image/upload/v1/Autodatenbank/Fahrzeugbilder/im03382-1-audi-a4.jpg",
        __v: 0,
      },
    ]);
  }, []);

  return (
    <>
      <Container
        className="col-6 d-flex flex-column justify-content-end align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Row className="handdiv justify-content-center">
          {myDeck ? myDeck.map((card) => <CardMaker card={card} />) : ""}
        </Row>
      </Container>
    </>
  );
}

export default App;
