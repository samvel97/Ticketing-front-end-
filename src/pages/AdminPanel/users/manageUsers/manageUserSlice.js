import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info:{},
    isLoading: false,
    error: "",
  };



  const manageUserSlice = createSlice({
    name: "userManage",
    initialState,
    reducers: {
      getUserPending: (state) => {
        state.isLoading = true;
      },
      getUserSuccess: (state, action) => {
        state.isLoading = false;
        state.info = action.payload;
        state.error = "";
      },
      getUserFail: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
    },
  },
});

    const { reducer, actions } = manageUserSlice;
    
    export const {
      getUserPending,
      getUserSuccess,
      getUserFail,
    } = actions;
    
    export default reducer;
    