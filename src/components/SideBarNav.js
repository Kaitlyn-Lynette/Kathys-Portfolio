import React from "react";
import Nav from "react-bootstrap/Nav";

const SideBarNav = () => {
  return (
    <div id="sidebar" style={{float:"left"}}>
      <Nav className="flex-column">
        <Nav.Link href="/home">Katherine Perez</Nav.Link>
        <Nav.Link eventKey="link-1">About</Nav.Link>
        <Nav.Link eventKey="link-2">Services</Nav.Link>
        <Nav.Link eventKey="link-3">Contact</Nav.Link>
      </Nav>
    </div>
  );
};

export default SideBarNav;
