import { Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import React from "react"
import { useSelector } from "react-redux";
import { ProfilePage } from "../../components/profile/profile.component";
 
export const Profile = ()=>{

  const { user } = useSelector((state) => state.user)
  console.log(user);
  return(
        <>
       <Col>
        <PageBreadcrumb page="Profile"/>
      </Col>
        <ProfilePage info={user}/>
        </>
    )
}
