import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomerTestimonials from "./components/CustomerTestimonials";
import OutcomesAndWhyMe from "./components/OutcomesAndWhyMe";


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        
        <OutcomesAndWhyMe />
        <CustomerTestimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
