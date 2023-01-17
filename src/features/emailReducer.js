import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    isEmailBoxOpen: false
}

export const emailSlicer = createSlice({
    name: "email",
    initialState,
    reducers:{
    offEmailBox : (state) =>{
        state.isEmailBoxOpen = false
        
    },
    onEmailBox : (state) =>{
        state.isEmailBoxOpen = true
    }
}
});

export const { offEmailBox, onEmailBox } = emailSlicer.actions;

export const isEmailBoxOpen = (state) => state.email.isEmailBoxOpen;

export default emailSlicer.reducer;



