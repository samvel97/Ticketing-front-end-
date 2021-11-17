import React from "react"
import { BarList } from "./navBar.comp"
import { Card } from "react-bootstrap";
import '../../style.css'
const navBar = [
    {title:'Home', path:'/home'},
    {title:'Profile', path:'/profile'},
    {title:'Dashboard', path:'/dashboard'},
    {title:'chapters', path:'/chapters'},
    {title:'Hierarchy', path:'/hierarchy'},
    {title:'Hierarchy', path:'/hierarchy'},
    {title:'Hierarchy', path:'/hierarchy'},
    {title:'Hierarchy', path:'/hierarchy'},
    {title:'Hierarchy', path:'/hierarchy'},
    {title:'Hierarchy', path:'/hierarchy'},
    {title:'Hierarchy', path:'/hierarchy'},
    {title:'Hierarchy', path:'/hierarchy'},
    {title:'Hierarchy', path:'/hierarchy'},
]
export const MenuBar = ()=>{
    return(
    <>
    <Card style={{ width: '18rem', backgroundColor:"#F1F3F4", position:"fixed", top:'7.9%'}}>
  <Card.Header>Username</Card.Header>
    {
        navBar.map((e)=>(<BarList title={e.title} path={e.path}/>))
    }
</Card>

    </>
        )
}