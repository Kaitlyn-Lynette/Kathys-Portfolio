// import NavExample from "./components/NavExample";
// import About from "./pages/About";
// import SplashImage from "./components/SplashImage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Work from "./pages/Work";
import Row from "react-bootstrap/Row";

import Container from "react-bootstrap/Container";
import "./index.css";

function App() {
  return (
    <div>   
      {/* <NavExample /> */}
      <Home/>
      <Container>
        <Row>
          {/* <About /> */}
          <Contact />
          <Services />
          <Testimonials />
          <Work />
        </Row>
        </Container>
    </div>
  );
}

export default App;
