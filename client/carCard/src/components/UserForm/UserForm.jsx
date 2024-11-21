import { useState } from "react";
import "./UserForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UserForm({ onSubmitHandler, type }) {
  return (
    <>
      <h3>{type === "login" ? "Login" : "Sign Up"}</h3>
      <Form onSubmit={onSubmitHandler}>
        {type === "signUp" && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter name" />
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {type === "login" ? "Login" : "Sign Up"}
        </Button>
      </Form>
    </>
  );
}

export default UserForm;

// <form onSubmit={onSubmitHandler}>

//   {type === "signUp" &&
//     <label>
//         Name:
//         <input name="name" type="text"/>
//     </label>
//   }
//   <label>
//     E-mail:
//     <input name="email" type="email"/>
//   </label>
//   <label>
//     Password:
//     <input name="password" type="password"/>
//   </label>
//   <button type="submit">{type === "login" ? "Login" : "Sign Up"}</button>
// </form>
