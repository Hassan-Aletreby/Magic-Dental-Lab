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
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className="container mx-auto text-center text-white relative z-10 py-32">
        <h2 className="text-6xl font-bold mt-[20%]">{t("hero_title")}</h2>
        <p className="mt-4 text-xl">{t("hero_subtitle")}</p>
        <a
          href="#contact"
          className="inline-block mt-6 px-6 py-2 rounded-full font-semibold text-black bg-white hover:bg-gray-200 transition duration-300 shadow-lg">
          {t("Contact us")}
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
