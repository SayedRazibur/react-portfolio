import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Testomonial from "./Components/Testomonial";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Portfolio />
      <Testomonial />
      <Contact />
      <Blog />
      <Footer />
    </main>
  );
};

export default App;
