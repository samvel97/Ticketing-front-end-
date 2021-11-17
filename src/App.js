import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { UserVerification } from "./pages/user-verification/UserVerification.page";
import { Entry } from "./pages/entry/Entry.page";
import { PasswordOtpForm } from "./pages/password-reset/PasswordOtpForm.page";
import { Registration } from "./pages/registration/Registration.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import {Home} from "./pages/home/Home.page";
import {Profile} from "./pages/profile/Profile.page";
import { Hierarchy } from "./pages/hierarchy/Hierarchy.page";
import { AdminPanel } from "./pages/AdminPanel/Admin.page";
import { useSelector } from "react-redux";
import { Users } from "./pages/AdminPanel/users/allUsersComponent";
import { Groups } from "./pages/AdminPanel/groups/groups.page";
import { Role } from "./pages/AdminPanel/role/role.page";
import { PrivateAdminRoute } from "./components/private-route/privateAdminRoute";
import { ChangeInfo } from "./pages/AdminPanel/users/manageUsers/manageUsers";

function App() {
	const { user } = useSelector((state) => state.user)
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Entry />
					</Route>
					<Route exact path="/registration">
						<Registration />
					</Route>
					<Route exact path="/password-reset">
						<PasswordOtpForm />
					</Route>
					<Route exact path="/verification/:_id/:email">
						<UserVerification />
					</Route>

					<PrivateRoute exact path="/home">
						<Home/>
					</PrivateRoute>
					<PrivateRoute exact path="/profile">
						<Profile />
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute exact path="/add-ticket">
						<AddTicket />
					</PrivateRoute>
					<PrivateRoute exact path="/ticket/:tId">
						<Ticket />
					</PrivateRoute>
					<PrivateRoute exact path="/tickets">
						<TicketLists />
					</PrivateRoute>
					<PrivateRoute exact path="/hierarchy">
						<Hierarchy />
					</PrivateRoute>
					{/* {
					user.role === 'admin' && */}
					<PrivateRoute exact path="/adminpanel" component={AdminPanel}/>
						{/* // } */}
					<PrivateAdminRoute exact path="/users">
						<Users/>
					</PrivateAdminRoute>
                    <PrivateAdminRoute exact path="/groups">
						<Groups/>
					</PrivateAdminRoute>
                    <PrivateAdminRoute exact path="/role">
						<Role/>
					</PrivateAdminRoute>
					<PrivateAdminRoute exact path="/popup/:id">
						<ChangeInfo/>
					</PrivateAdminRoute>
					

					<Redirect to="*">
						<h1>404 Page not found</h1>
					</Redirect>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
