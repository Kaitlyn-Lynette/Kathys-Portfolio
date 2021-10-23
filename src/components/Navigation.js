import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const navOne = "About";
  const navTwo = "Work";
  const navThree = "Services";
  const navFour = "Testimonials";
  const navFive = "Contact";

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      variant="light"
      bg="light"
    >
      <Container fluid>
        <Navbar.Brand>
          <Image
            src="/images/KatherineNewLogo3.png"
            className="nav-brand"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-item">
            <Nav.Link href="#about">{navOne}</Nav.Link>
            <NavDropdown title={navTwo} id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/featuredwork">
                  Featured Work
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#work">Read with Coffee</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#services">{navThree}</Nav.Link>
            <Nav.Link href="#testimonials">{navFour}</Nav.Link>
            <Nav.Link href="#contact">{navFive}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
