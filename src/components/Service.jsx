import { useTranslation } from "react-i18next";
import CAD from "../assets/imgs/1.jpeg";
import Zirconia from "../assets/imgs/2.jpeg";
import MultiLayer from "../assets/imgs/3.jpeg";
import EMax from "../assets/imgs/4.jpeg";
import PFM from "../assets/imgs/PFM.png";
import Zolid from "../assets/imgs/Zolid.jpeg";

function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t("services.0.title"),
      image: CAD,
      alt: t("services.0.title"),
      features: [
        t("services.0.features.0"),
        t("services.0.features.1"),
        t("services.0.features.2"),
      ],
    },
    {
      id: 2,
      title: t("services.1.title"),
      image: Zirconia,
      alt: t("services.1.title"),
      features: [
        t("services.1.features.0"),
        t("services.1.features.1"),
        t("services.1.features.2"),
      ],
    },
    {
      id: 3,
      title: t("services.2.title"),
      image: MultiLayer,
      alt: t("services.2.title"),
      features: [
        t("services.2.features.0"),
        t("services.2.features.1"),
        t("services.2.features.2"),
      ],
    },
    {
      id: 4,
      title: t("services.3.title"),
      image: EMax,
      alt: t("services.3.title"),
      features: [
        t("services.3.features.0"),
        t("services.3.features.1"),
        t("services.3.features.2"),
      ],
    },
    {
      id: 5,
      title: t("services.4.title"),
      image: PFM,
      alt: t("services.4.title"),
      features: [
        t("services.4.features.0"),
        t("services.4.features.1"),
        t("services.4.features.2"),
      ],
    },
    {
      id: 6,
      title: t("services.5.title"),
      image: Zolid,
      alt: t("services.5.title"),
      features: [
        t("services.5.features.0"),
        t("services.5.features.1"),
        t("services.5.features.2"),
      ],
    },
  ];

  return (
    <section id="services" className="py-16 bg-black pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          {t("services_section_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#101010d8] truncate rounded-xl transition-all duration-300 ease-in-out text-right hover:bg-[#3838387a]"
            >
              <div className="w-full max-h-48 h-48 flex items-center justify-center truncate overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full object-cover transition-transform duration-300 hover:rotate-3 hover:scale-[1.1]"
                />
              </div>
              <div className="p-6 pt-0">
                <h3 className="text-[20px] font-semibold text-white text-center mt-3 mb-2">
                  {service.title}
                </h3>
                <ul className="text-white mt-2 list-disc pr-4 text-[16px]">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
