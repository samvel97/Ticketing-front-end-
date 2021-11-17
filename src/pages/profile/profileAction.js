// import { getUserProfilePending, getUserProfileSuccess, getUserProfileFail } from "./profileSlice";
import { getUsersPending, getUsersSuccess, getUsersFail } from "../AdminPanel/users/allUsersSlice";
import { getAllUsers } from "../../api/userApi";

export const AllUsers = () => async (dispatch) => {
  dispatch(getUsersPending());
  try {
    const result = await getAllUsers();
    console.log(result.data.result);
    dispatch(getUsersSuccess(result.data.result));
  } catch (error) {
    dispatch(getUsersFail(error.message));
  }
};
