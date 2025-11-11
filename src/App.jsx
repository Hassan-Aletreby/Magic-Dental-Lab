import { useEffect, useState } from "react";
import Header from "./components/header";
import SidebarLinks from "./components/SidebarLinks";
import Productslider from "./components/Productslider";
import HeroSection from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/Service";
import LabGallery from "./components/LabGallery";
import Footer from "./components/footer";
import ContactSection from "./components/Contact";
import LocationMap from "./components/Location";
import Loader from "./components/Loader";
import "./i18n";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <SidebarLinks />
      <HeroSection />
      <Productslider />
      <AboutSection />
      <ServicesSection />
      <LabGallery />
      <LocationMap />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
