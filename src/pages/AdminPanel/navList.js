import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { ListGroup } from "react-bootstrap";

export const NavList = ({title, path}) => {
    return(
        <LinkContainer to={path}>
            <ListGroup variant="flush">
                <ListGroup.Item>{title}</ListGroup.Item>
            </ListGroup>
        </LinkContainer>
        )
}