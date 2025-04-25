import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaTruck, FaUserCog, FaSignOutAlt, FaHome } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={NavLink} to="/">AdminPanel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="d-flex align-items-center">
              <FaHome className="me-2" /> Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/clientes">
              <FaUsers className="me-2" /> Clientes
            </Nav.Link>
            <Nav.Link as={NavLink} to="/proveedor">
              <FaTruck className="me-2" /> Proveedor
            </Nav.Link>
            <Nav.Link as={NavLink} to="/usuarios">
              <FaUserCog className="me-2" /> Usuarios
            </Nav.Link>
            <Nav.Link as={NavLink} to="/logout">
              <FaSignOutAlt className="me-2" /> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}