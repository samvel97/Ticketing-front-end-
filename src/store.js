import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./pages/ticket-list/ticketsSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import newTicketReducer from "./components/add-ticket-form/addTicketSlicer";
import registrationReducer from "./components/registration-form/userRegestrationSlice";
import passwordReducer from "./components/password-reset/passwordSlice";
import allUsersReducer from './pages/AdminPanel/users/allUsersSlice';
import manageUserReducer from './pages/AdminPanel/users/manageUsers/manageUserSlice'
const store = configureStore({
	reducer: {
		allUsers:allUsersReducer,
		tickets: ticketsReducer,
		login: loginReducer,
		user: userReducer,
		openTicket: newTicketReducer,
		registration: registrationReducer,
		password: passwordReducer,
		userManagement: manageUserReducer
	},
});

export default store;
