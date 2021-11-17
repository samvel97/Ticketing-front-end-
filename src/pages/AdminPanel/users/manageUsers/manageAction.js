import { getUserPending, getUserSuccess, getUserFail } from "./manageUserSlice";
import {  getUserForManage } from "../../../../api/userApi";



export const readyForManage = (_id) => async (dispatch) => {
    dispatch(getUserPending());
    try {
      const result = await getUserForManage(_id);
      console.log(result.user);

      if(result.user.id)
        return dispatch(getUserSuccess(result.user))
        
      dispatch(getUserFail("User is not found"));
    } catch (error) {
      dispatch(getUserFail(error.message));
    }
  };