import About from "./pages/About";
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Work from "./pages/Work";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import "./App.css";

library.add(fab, fas, far)

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
