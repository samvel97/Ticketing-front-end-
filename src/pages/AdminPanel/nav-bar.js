import React from "react"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { useHistory } from "react-router-dom";
import { userLogout } from "../../api/userApi";

export const AdminNavBar = () => {
    const history = useHistory();

    const logMeOut = () => {
        sessionStorage.removeItem("accessJWT");
        localStorage.removeItem("crmSite");
        userLogout();
        history.push("/");
      };
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <div style={{display:'flex'}}>
            <Navbar.Brand>
                <img src={logo} alt="logo" width="50px" />
            </Navbar.Brand>
            <Navbar.Brand href="#home" style={{marginTop:'10px'}}>Easy Manage</Navbar.Brand>
                </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                <Nav.Link onClick={logMeOut}>Logout</Nav.Link>

                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}