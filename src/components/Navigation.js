import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";

const Navigation = () => {
  const name = "Katherine Perez";
  const navOne = "About";
  const navTwo = "Work";
  const navThree = "Services";
  const navFour = "Testimonials";
  const navFive = "Contact";

  return (
  
    <Navbar  collapseOnSelect expand="lg" sticky="top">
      <Navbar.Brand className="nav-brand"> {name}</Navbar.Brand>
      <Nav className="nav-links">
        <Nav.Link className="nav-item" href="#about">{navOne}</Nav.Link>
        <Nav.Link className="nav-item" href="#work">{navTwo}</Nav.Link>
        <Nav.Link className="nav-item" href="#services">{navThree}</Nav.Link>
        <Nav.Link className="nav-item" href="#testimonials">{navFour}</Nav.Link>
        <Nav.Link className="nav-item" href="#contact">{navFive}</Nav.Link>
      </Nav>
    </Navbar>
     
    
  );
};

export default Navigation
