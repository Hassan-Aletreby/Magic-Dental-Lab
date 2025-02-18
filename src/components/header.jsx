import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [scrolling, setScrolling] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto w-[80%] flex items-center justify-between py-2 md:py-1">
        <a
          href="#home"
          className="basis-1/3 flex items-center justify-start text-white w-full"
        >
          <img
            src="/src/assets/imgs/logo3.jpg"
            alt="logo-img"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full ml-1.5"
          />
          <div className="logo__text text-right">
            <h2 className="text-lg md:text-2xl font-bold">MAGIC</h2>
            <p className="text-[12px] md:text-xs">Dental Lab</p>
          </div>
        </a>

        <nav className="hidden md:flex basis-2/3 text-right">
          <ul className="flex gap-12 justify-end text-white">
            <li>
              <a
                href="#home"
                className="text-white text-[18px] opacity-[0.9] hover:opacity-[1] hover:underline transition-all duration-300"
              >
                {t("home")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white text-[18px] opacity-[0.9] hover:opacity-[1] hover:underline transition-all duration-300"
              >
                {t("about")}
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white text-[18px] opacity-[0.9] hover:opacity-[1] hover:underline transition-all duration-300"
              >
                {t("service")}
              </a>
            </li>
            <li>
              <a
                href="#location"
                className="text-white text-[18px] opacity-[0.9] hover:opacity-[1] hover:underline transition-all duration-300"
              >
                {t("location")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-[18px] opacity-[0.9] hover:opacity-[1] hover:underline transition-all duration-300"
              >
                {t("contact")}
              </a>
            </li>
          </ul>
        </nav>

        <div className="relative">
          <button
            className="text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {i18n.language === "ar" ? "العربية" : "English"}
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-black text-white rounded-md shadow-lg">
              <button
                onClick={() => handleLanguageChange("ar")}
                className="block w-full px-4 py-2 text-right hover:bg-gray-700 cursor-pointer"
              >
                العربية
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className="block w-full px-4 py-2 text-right hover:bg-gray-700 cursor-pointer"
              >
                English
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
