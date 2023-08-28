import { TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Auth.css";
import { store } from '../store/store';
import { useNavigate } from 'react-router';
import { changeLoggedIndex } from '../store/indexReducer';
import { deleteUser } from '../store/userReducer';

const Login = () =>{

    const navigate = useNavigate("");

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const users = store.getState().userReducer;

    const userChange = (e) => {
        setUsername(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        if(username==""){
            alert("Please enter Username");
            return;
        }
        if(password==""){
            alert("Please Enter password");
            return;
        }
        var cnt=0;
        for( let i=0;i<users.length;i++){
            if(username == users[i].username) {
                if(password == users[i].password){
                    store.dispatch(changeLoggedIndex(i));
                    navigate("/dashboard");
                }
                else{
                    alert("Enter the correct password");
                    return;
                }
                break;
            }
            cnt++;
        }
        if(cnt== users.length){
            alert("User Not found !! Please signup");
            return;
        }
        setUsername("");
        setPassword("");
    }

    const handelDelete = (ussr) => {
        store.dispatch(deleteUser(ussr));
    }
    
    return (
        <div className = "login-container">
            <div className = "login-header">
                Log In
            </div>
            <div className = "login-input">
                <TextField value={username} onChange={userChange} placeholder="Username"  variant = "outlined" fullWidth />
            </div>
            <div className = "login-input">
                <TextField value={password} onChange={passwordChange} placeholder="Password" type="password"  variant = "outlined" fullWidth />
            </div>
            <div className = "login-button-container">
                <input onClick={handleLogin} className = "login-button" type = "button" value = "Log In" />
            </div>
            <div className = "login-already">
                New User? <Link style = {{textDecoration: "none", fontWeight: "bold"}} to = "/signup">Sign Up</Link>
            </div>
            {/* <input type="button" placeholder="delete" onClick={()=>handelDelete(users[0])} /> */}
        </div>
    );
}

export default Login;