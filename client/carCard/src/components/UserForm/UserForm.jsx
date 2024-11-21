import { useState } from "react";
import "./UserForm.css";

function UserForm({onSubmitHandler, type}) {
    return (
        <form onSubmit={onSubmitHandler}>
        <h3>{type === "login" ? "Login" : "Sign Up"}</h3>
          {type === "signUp" &&
            <label>
                Name: 
                <input name="name" type="text"/>
            </label>
          }
          <label>
            E-mail: 
            <input name="email" type="email"/>
          </label>
          <label>
            Password: 
            <input name="password" type="password"/>
          </label>
          <button type="submit">{type === "login" ? "Login" : "Sign Up"}</button>
        </form>
    )
}

export default UserForm;
