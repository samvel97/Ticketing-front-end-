import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    redyToChange:{},
    isLoading: false,
    error: "",
  };



  const allUsersSlice = createSlice({
    name: "allUsers",
    initialState,
    reducers: {
        getUsersPending: (state) => {
        state.isLoading = true;
      },
      getUsersSuccess: (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      },
      getUsersFail: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    }
    });

    const { reducer, actions } = allUsersSlice;
    
    export const {
        getUsersPending,
        getUsersSuccess,
        getUsersFail,
        getUsersToManage
    } = actions;
    
    export default reducer;
    