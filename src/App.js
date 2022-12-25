import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/Scrollup/ScrollUp";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Work />
          <Testimonials />
          <Contact />
        </div>
      </div>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
