import React from "react";
import { AdminPanel } from "../../pages/AdminPanel/Admin.page";

export const PrivateAdminRoute = ({children}) => {
    return(
        <AdminPanel>{children}</AdminPanel>
    )
}