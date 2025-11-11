import { useState, useEffect } from "react";
import { FaFacebookF, FaWhatsapp, FaArrowUp, FaPhone } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function SidebarLinks() {
  const [showButtons, setShowButtons] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      if (
        scrollPosition < 100 ||
        scrollPosition + windowHeight > documentHeight - 100
      ) {
        setShowButtons(false);
      } else {
        setShowButtons(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showButtons) return null;

  const buttonClasses =
    "bg-white p-4 rounded-full shadow-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition transform hover:-translate-y-1 hover:scale-110 cursor-pointer flex items-center justify-center";

  return (
    <>
      {/* Desktop & Tablet */}
      <div className="hidden md:flex fixed right-4 top-1/3 flex-col space-y-4 z-50">
        <button
          onClick={scrollToTop}
          className={buttonClasses}
          title="Go to Top">
          <FaArrowUp className="text-black text-lg" />
        </button>

        <a
          href="https://www.facebook.com/profile.php?id=61569695740756"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          title="Facebook">
          <FaFacebookF className="text-blue-600 text-lg" />
        </a>

        <a
          href="https://wa.me/201063254311"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          title="WhatsApp">
          <FaWhatsapp className="text-green-500 text-lg" />
        </a>

        <a
          href="https://www.tiktok.com/@magic.dental.lab7?_t=ZS-8u0AFeJbjlf&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          title="TikTok">
          <SiTiktok className="text-black text-lg" />
        </a>

        <a href="tel:+201020453469" className={buttonClasses} title="Call Us">
          <FaPhone className="text-red-600 text-lg" />
        </a>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 space-x-4 z-50">
        <button
          onClick={scrollToTop}
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110 cursor-pointer">
          <FaArrowUp className="text-black text-lg" />
        </button>

        <a
          href="https://www.facebook.com/profile.php?id=61569695740756"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110 cursor-pointer">
          <FaFacebookF className="text-blue-600 text-lg" />
        </a>

        <a
          href="https://wa.me/201063254311"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110 cursor-pointer">
          <FaWhatsapp className="text-green-500 text-lg" />
        </a>

        <a
          href="https://www.tiktok.com/@magic.dental.lab7?_t=ZS-8u0AFeJbjlf&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110 cursor-pointer">
          <SiTiktok className="text-black text-lg" />
        </a>

        <a
          href="tel:+201020453469"
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110 cursor-pointer">
          <FaPhone className="text-red-600 text-lg" />
        </a>
      </div>
    </>
  );
}
