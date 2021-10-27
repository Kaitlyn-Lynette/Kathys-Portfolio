import React from "react";
import Nav from "react-bootstrap/Nav";


const SideBarNav = () => {
  return (
    <div id="sidebar" style={{float:"left", padding: "20px", position: "sticky", top: "0"}}>
      <Nav className="flex-column" sticky="top"    >
        <Nav.Link href="/home" style={{fontSize: "20px"}}>Katherine Perez</Nav.Link>
        <Nav.Link eventKey="link-1">About</Nav.Link>
        <Nav.Link eventKey="link-2">Services</Nav.Link>
        <Nav.Link eventKey="link-3">Contact</Nav.Link>
      </Nav>
    </div>
  );
};

export default SideBarNav;
