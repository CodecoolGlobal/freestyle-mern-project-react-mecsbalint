/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../pages/App/App.css";

function UserStatusComponent({currentUser, handleLogOut}) {
    return (
        <div className="userBtnsDiv">
            {currentUser ? (
                <div className="d-flex">
                    <div className="userNameDiv justify-content-center my-auto">
                    <p className="my-auto me-4">{currentUser?.name} </p>
                    </div> 
                    <button className="btn btn-primary" type="button" onClick={handleLogOut}>Log Out</button>
                </div>
            ) : (
                <>
                <Link to={"/login"}>
                <button className="btn btn-primary m-3">Login</button>
                </Link>
                <Link to={"/registration"}>
                <button className="btn btn-primary m-3">Sign Up</button>
                </Link>
                </>
            )}
      </div>
    )
}

export default UserStatusComponent;
