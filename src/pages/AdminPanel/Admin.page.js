import React, { useEffect } from 'react'
import { Col, Card } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { useDispatch } from "react-redux";
import { AllUsers } from "../profile/profileAction";
import './style.css'
import { AdminNavBar } from "./nav-bar";
import { NavList } from "./navList";
import { RouteNavList } from './router';


export const AdminPanel = ({children})=>{
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllUsers());
  }, [dispatch]);

  const navBar = [
    {title:'users', path:'/users'},
    {title:'groups', path:'/groups'},
    {title:'role', path:'/role'},
]

    return(
        <>
        <AdminNavBar/>

        <Col style={{marginTop:'7%'}}>
            <PageBreadcrumb page="adminpanel"/>
        </Col>
        
        <div className='adminpanels'>
        
        <Card style={{ width: '18rem', float:'left'}}>
        <Card.Header>AdminPanel</Card.Header>
          {
            navBar.map((e)=>(<NavList title={e.title} path={e.path}/>))
          }
        </Card> 

        <div>{children}</div>
        
        </div>

        </>
    )
}