import "../styles/Events.css";
import "../styles/Card.css";
import { useSelector } from "react-redux";
import { store } from "../store/store";
import cancel from "../images/cancel.png";
import { deleteReminder } from "../store/reminderReducer";
import { useState } from "react";

const Event = () => {
    const reminders = useSelector((state) => state.reminderReducer); 
    const loggedIndex = useSelector((state => state.indexReducer[0]));
    const users = store.getState().userReducer;

    const handleDelete = (reminder) => {
        store.dispatch(deleteReminder(reminder));
    }

    return(
        <div className="reminders">
            <div className="reminders-header">
                Upcoming Events
            </div>
            <div className="row">
            {
                Object.values(reminders)?.map((reminderr)=> (
                        reminderr.username === users[loggedIndex].username &&
                        <div className="column">
                            <div className="card">
                                <img src={cancel} className="delete" onClick={() => handleDelete(reminderr)} />
                               <div className="details">
                                    UserName : {reminderr.username} 
                                </div>
                                <div className="details"> 
                                    Title : {reminderr.titles}
                                </div>
                                <div className="details">
                                    Date : {reminderr.dates}
                                </div>
                                <div className="details">
                                    Time : {reminderr.times}
                                </div>
                                <div className="details">
                                    Location : {reminderr.locations}
                                </div>
                                <div className="details">
                                    Description : {reminderr.text}
                                </div>
                            </div>
                        </div>
                ))
            }
            </div>
        </div>
    )
}

export default Event;