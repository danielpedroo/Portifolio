import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Portifolio from "./Portifolio";
import Courses from "./Courses";

export default function App() {


  return (
    <main>
      <Navbar />
      <Home />
      <Courses />
      <AboutMe />
      <Portifolio />
      <ContactForm />
      <Footer />
    </main>
  );
}