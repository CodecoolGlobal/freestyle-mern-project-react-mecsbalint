import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./login.css";
import loginImage from '../../assets/backgrounds/login.jpg';
import UserForm from "../../components/UserForm/UserForm";

function Login({isLogin}) {
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  async function handleLoginButton(event) {
    setErrorMessage(null);
    event.preventDefault();
    const formObject = new FormData(event.target);
    const response = await fetch(`/api/users/${formObject.get("email")}`, {headers: {"authorization": formObject.get("password")}});
    switch (response.status) {
      case 404:
        setErrorMessage("There is no user with this e-mail address, please try again.");
        break;
        case 401:
          setErrorMessage("Incorrect password. Please try again.");
          break;
        case 200:
          { const loggedInUser = await response.json();
            await fetch(`/api/activeuser/${loggedInUser._id}`, {method: "POST"});
            navigate("/")
            break; 
          }
    }
  }

  async function handleSignUpButton(event) {
    setErrorMessage(null);
    event.preventDefault();
    const formObject = new FormData(event.target);
    const response = await fetch("/api/users/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name: formObject.get("name"), email: formObject.get("email"), password: formObject.get("password")}),
    });
    if (response.status === 403) {
      setErrorMessage("Invalid registration data, please try again.");
      return;
    }
    const newUser = await response.json();
    await fetch(`/api/activeuser/${newUser._id}`, {method: "POST"});
    navigate("/");
  }

  return (
    <Container
      fluid
      className="d-flex m-auto mainBg"
      style={{ height: "100vh" }}
    >
      <Container className=" col-6 loginDiv my-auto">
        <Row>
          <Col xs={4} className="p-0 loginPicDiv">
            <img src={loginImage} className="loginPic"></img>
          </Col>
          <Col xs={6} className="text-center m-auto">
            {
              isLogin ? 
            <UserForm onSubmitHandler={handleLoginButton} type={"login"}/>
            :
            <UserForm onSubmitHandler={handleSignUpButton} type={"signUp"}/>
            }
            {errorMessage && <p>{errorMessage}</p>}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
