import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./login.css";
import loginImage from '../../assets/backgrounds/login.jpg';

function Login() {
  return (
    <Container
      fluid
      className="d-flex m-auto loginBg"
      style={{ height: "100vh" }}
    >
      <Container className=" col-6 loginDiv my-auto">
        <Row>
          <Col xs={4} className="p-0 loginPicDiv">
            <img src={loginImage} className="loginPic"></img>
          </Col>
          <Col xs={8} className="text-center">
            <h3>Login</h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
