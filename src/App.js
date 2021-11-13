import About from "./pages/About";
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Work from "./pages/Work";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
