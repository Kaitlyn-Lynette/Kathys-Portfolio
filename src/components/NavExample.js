import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./NavExample.css";

const NavExample = () => {
  const name = "Katherine Perez";
  const navOne = "About";
  const navTwo = "Work";
  const navThree = "Services";
  const navFour = "Testimonials";
  const navFive = "Contact";

  return (
  
    <Navbar  collapseOnSelect expand="lg">
      <Navbar.Brand className="nav-brand"> {name}</Navbar.Brand>
      <Nav className="nav-links">
        <Nav.Link href="#about">{navOne}</Nav.Link>
        <Nav.Link href="#work">{navTwo}</Nav.Link>
        <Nav.Link href="#services">{navThree}</Nav.Link>
        <Nav.Link href="#testimonials">{navFour}</Nav.Link>
        <Nav.Link href="#contact">{navFive}</Nav.Link>
      </Nav>
    </Navbar>
     
    
  );
};

export default NavExample;
