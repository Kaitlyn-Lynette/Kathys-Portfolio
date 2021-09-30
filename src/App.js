import NavExample from "./components/NavExample";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Work from "./pages/Work";
import Row from "react-bootstrap/Row";
import "./index.css";

function App() {
  return (
    <div>   
      <NavExample />
        <Row>
          <About />
          <Contact />
          <Services />
          <Testimonials />
          <Work />
        </Row>
    </div>
  );
}

export default App;
