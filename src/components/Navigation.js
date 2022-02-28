import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  const navOne = "About";
  const navTwo = "Work";
  const navThree = "Services";
  const navFour = "Testimonials";
  const navFive = "Contact";
  const history = useHistory();

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
            src="/images/logo_2.png"
            className="nav-brand"
            style={{ height: '100px', width: '500px'}}
            onClick={() => {
              history.push("/");
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-item">
            <Nav.Link
              href="#about"
              onClick={() => {
                history.push("/");
              }}
            >
              {navOne}
            </Nav.Link>
            <NavDropdown title={navTwo} id="basic-nav-dropdown">
              <NavDropdown.Item
              className="noSelect"
              >
                <Nav.Link 
                as={Link} 
                to="/portfolio"
               >
                  Portfolio
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
              className="noSelect"
              >
                <Nav.Link 
                as={Link} 
                to="/readwithcoffee"
               >
                  Read With Coffee
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="#services"
              onClick={() => {
                history.push("/");
              }}
            >
              {navThree}
            </Nav.Link>
            <Nav.Link
              href="#testimonials"
              smooth={true}
              offset={-100}
              onClick={() => {
                history.push("/");
              }}
            >
              {navFour}
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => {
                history.push("/");
              }}
            >
              {navFive}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
