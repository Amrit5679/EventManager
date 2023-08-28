import { TextField } from '@mui/material';
import { useState } from 'react';
import { addReminder } from '../store/reminderReducer';
import { store } from '../store/store';
import "../styles/AddEvent.css";
import { useSelector } from "react-redux";

const AddEvent = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time ,setTime] = useState("");
    const [location, setLocation] =useState("");
    const [eventDesc, setEventDesc] = useState("");

    const loggedIndex = useSelector((state => state.indexReducer[0]));
    const users = store.getState().userReducer;
    const handleChange = (e) => {
        setEventDesc(e.target.value);
    }
    const titleChange = (e) =>{
        setTitle(e.target.value);
    }
    const dateChange = (e) =>{
        setDate(e.target.value);
    }
    const timeChange = (e) =>{
        setTime(e.target.value);
    }
    const locationChange = (e) =>{
        setLocation(e.target.value);
    }

    const handleSubmit = () => {
        const reminder = {
            username: users[loggedIndex].username,
            // text: reminderText
            titles: title,
            dates: date,
            times: time,
            locations: location,
            text: eventDesc
        }
        store.dispatch(addReminder(reminder));
        setTitle("");
        setDate("");
        setTime("");
        setLocation("");
        setEventDesc("");
    }

    return(
        <div className="add-event">
            <div className = "form-container">
                <div className = "form-header">
                    Enter Event Details
                </div>
                <div className = "form-input">
                    <TextField value={title} onChange={titleChange} placeholder="Event Title"  variant = "outlined" fullWidth />
                </div>
                <div className = "form-input">
                    <TextField value={date} onChange={dateChange} placeholder="Date of Event" type="date"  variant = "outlined" fullWidth />
                </div>
                <div className = "form-input">
                    <TextField value={time} onChange={timeChange} placeholder="Time of event" type="time"  variant = "outlined" fullWidth />
                </div>
                <div className = "form-input">
                    <TextField value={location} onChange={locationChange} placeholder="Location" type="text"  variant = "outlined" fullWidth />
                </div>
                <div className = "form-input">
                    <TextField value={eventDesc} onChange={handleChange} placeholder="Descrption" type="text"  variant = "outlined" fullWidth />
                </div>
                <div className = "form-button-container">
                    <input className="button" type="button" value="Add Event" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default AddEvent;