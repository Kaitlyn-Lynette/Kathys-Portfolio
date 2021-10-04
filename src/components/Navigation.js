import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from "react-bootstrap/Image";
import "./Navigation.css";

const Navigation = () => {
  const navOne = "About";
  const navTwo = "Work";
  const navThree = "Services";
  const navFour = "Testimonials";
  const navFive = "Contact";

  return (
  
    <Navbar  collapseOnSelect expand="lg" sticky="top">
      <Image src="/images/Kathy_Logo_500x100px-transparent.png" className="nav-brand" />
      <Nav className="nav-links">
        <Nav.Link className="nav-item" href="#about">{navOne}</Nav.Link>
        {/* <Nav.Link className="nav-item" href="#work">{navTwo}</Nav.Link> */}
      <NavDropdown className="nav-item" title={navTwo} id="navbarScrollingDropdown">
        <NavDropdown.Item href="#work">Book Edits</NavDropdown.Item> 
        <NavDropdown.Item href="#work">Paid Writing</NavDropdown.Item>
        <NavDropdown.Item href="#work">My Personal Writing</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#work">Read with Coffee</NavDropdown.Item>
      </NavDropdown>
        <Nav.Link className="nav-item" href="#services">{navThree}</Nav.Link>
        <Nav.Link className="nav-item" href="#testimonials">{navFour}</Nav.Link>
        <Nav.Link className="nav-item" href="#contact">{navFive}</Nav.Link>
      </Nav>
    </Navbar>
     
    
  );
};

export default Navigation
