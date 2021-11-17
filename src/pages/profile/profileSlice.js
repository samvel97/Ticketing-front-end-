import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProfile:{},
    isLoading: false,
    error: "",
}

const ProfileSlice = createSlice({
    name:'profile',
    initialState,
    reducers:{
        getUserProfilePending: (state) => {
            state.isLoading = true;
        },
        getUserProfileSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.userProfile = payload;
            state.error = "";
        },
        getUserProfileFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
    },
})

const { reducer, actions } = ProfileSlice;

export const {
    getUserProfilePending,
    getUserProfileSuccess,
    getUserProfileFail,
  } = actions;
  
  export default reducer;