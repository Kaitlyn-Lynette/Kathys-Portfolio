import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const NavExample = () => {

  const name = "Katherine Perez";
  const navOne = "About";
  const navTwo = "Work";
  const navThree = "Services";
  const navFour = "Testimonials";
  const navFive = "Contact"


  return (
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand>{name}</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#about">{navOne}</Nav.Link>
      <Nav.Link href="#work">{navTwo}</Nav.Link>
      <Nav.Link href="#services">{navThree}</Nav.Link>
      <Nav.Link href="#testimonials">{navFour}</Nav.Link>
      <Nav.Link href="#contact">{navFive}</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  );
};


export default NavExample;
