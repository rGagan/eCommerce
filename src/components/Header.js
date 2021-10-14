import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'
import {Cart} from "react-bootstrap-icons"

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Shopping Website</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link className="float-end" href="/cart"><Cart /></Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
};

export default Header;