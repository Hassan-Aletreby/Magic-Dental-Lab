import "./App.css";
import Header from "./components/header";
import Productslider from "./components/Productslider";
import HeroSection from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/Service";
import Footer from "./components/footer";
import ContactSection from "./components/Contact";
import LocationMap from "./components/Location";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Productslider />
      <AboutSection />
      <ServicesSection />
      <LocationMap />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
