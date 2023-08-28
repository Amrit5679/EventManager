import { createSlice } from "@reduxjs/toolkit";
import { getUsers , setUsers} from "../utilities/localStorage"

const userSlice = createSlice({
    name :"users",
    initialState : getUsers("users"),
    reducers : {
        addUser : (state,action) => {
            state.push(action.payload);
            setUsers("users", JSON.stringify(state))
        },
        deleteUser : (state,action) => {
            for(let i=0;i<state.length;i++){
                if(state[i].username==action.payload.username){
                    state.splice(i,1);
                    break;
                }
            }
            setUsers("users",JSON.stringify(state));
        },
    }
})

export const {addUser,deleteUser} =userSlice.actions;

export const userReducer =userSlice.reducer;