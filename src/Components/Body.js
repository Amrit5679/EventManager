import React from "react";
import img1 from "../images/event-reminder-500x500.webp"
import img2 from "../images/reminder_email_examples.webp"
import "../styles/Body.css"

const Body = () => {
    return(
        <div className="body">
            <div className="text">LogIn to manage the event details</div>
            <img src={img1} className="image" />
        </div>
    );
}

export default Body;