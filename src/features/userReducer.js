import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    loggedUser: null
}

export const userSlicer = createSlice({
    name: "user",
    initialState,
    reducers:{
        login:  (state, action) =>{
            state.loggedUser = action.payload;
        },
        logout: (state) =>{
            state.loggedUser =null;
        }
    }
})

export const {login, logout} = userSlicer.actions;

export const loggedUserDetails = (state) => state.user.loggedUser;

export default userSlicer.reducer;