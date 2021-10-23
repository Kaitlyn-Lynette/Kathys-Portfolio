import React from "react";
import Nav from "react-bootstrap/Nav";

const SideBarNav = () => {
  return (
    <div id="sidebar" style={{float:"left", padding: "20px"}}>
      <Nav className="flex-column">
        <Nav.Link href="/home" style={{fontSize: "18px"}}>Katherine Perez</Nav.Link>
        <Nav.Link eventKey="link-1">About</Nav.Link>
        <Nav.Link eventKey="link-2">Services</Nav.Link>
        <Nav.Link eventKey="link-3">Contact</Nav.Link>
      </Nav>
    </div>
  );
};

export default SideBarNav;
