import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import {useAuth} from "../context/AuthContext";

const Header = () => {
  const history = useHistory()
  const {logout, currentUser} = useAuth()

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
              <NavDropdown id="profile" title={currentUser.username} menuVariant="dark" align="end">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>
                    <i className="bi bi-person"/>&nbsp;Profile
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider/>
                <NavDropdown.Item onClick={logoutHandler}>
                  <i className="bi bi-box-arrow-right"/>&nbsp;Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;