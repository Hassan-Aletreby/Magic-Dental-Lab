import { useState } from "react";
import { useTranslation } from "react-i18next";
import background from "../assets/imgs/back.jpg";

function HeroSection() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-4 text-white">
        <h2 className="text-6xl font-bold mb-4 text-white  mt-70   md:mt-[18%]">
          {t("hero_title")}
        </h2>
        <p className="text-xl mb-6">{t("hero_subtitle")}</p>
        <a
          href="#contact"
          className="inline-block px-6 py-2 rounded-full font-semibold text-black bg-white hover:bg-gray-200 transition duration-300 shadow-lg">
          {t("Contact us")}
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
