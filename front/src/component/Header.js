import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import {useAuth} from "../context/AuthContext";

const Header = () => {
  const history = useHistory()
  const {logout} = useAuth()

  const logoutHandler = async event => {
    event.preventDefault()
    await logout()
    history.push("/")
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" fixed="top" collapseOnSelect className="bg-custom">
        <Container>
          <Navbar.Brand as={Link} to="/">Brand Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse"/>
          <Navbar.Collapse className="justify-content-end" id="navbarCollapse">
            <Nav>
              <LinkContainer to="/profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={logoutHandler}>
                Sign Out <i className="bi bi-box-arrow-right"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;