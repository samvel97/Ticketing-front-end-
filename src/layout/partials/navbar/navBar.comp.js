import React from "react"
import { ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


export const BarList = ({title, path})=>{
    return(
    <>
    
  
  <LinkContainer to={path}>
    <ListGroup variant="flush">
      <ListGroup.Item>{title}</ListGroup.Item>
    </ListGroup>
  </LinkContainer>
    </>
        )
}