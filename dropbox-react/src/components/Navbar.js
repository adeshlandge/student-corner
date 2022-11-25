import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                {/* <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="">Student Corner</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="login">Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar> */}

                <nav className="navbar">
                    <h1>Student Corner</h1>
                    <div className="links">
                        <Link to="/">Register</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </nav>


                {/* <br />
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Student Corner</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <br />
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Student Corner</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar> */}
            </div>
        );
    }
}

export default NavBar;