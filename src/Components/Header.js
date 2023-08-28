import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Body from "./Body";
import { useSelector } from "react-redux";
import { changeLoggedIndex } from "../store/indexReducer";
import { store } from "../store/store";
import logout from "../images/logout.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const loggedIndex = useSelector((state) => state.indexReducer[0]);
    const navigate = useNavigate("");
    const handleLogout = () => {
        store.dispatch(changeLoggedIndex(-1));
        navigate("/");
    }
    return(
        <div>
            <div className="header">
                <h1>Event Manager</h1>
                {loggedIndex !=-1 ? ( <img onClick={handleLogout} src ={logout} className="logout"/>)
                :(
                <div className="button2">
                    <Link to="/login" ><input className="log-button" type="button" value="Login" /></Link>
                    <Link to="/signup" ><input className= "sign-button" type="button" value="SignUp" /></Link>
                </div>
                )}
            </div>
        </div>
    );
}

export default Header;