import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-black py-20 text-white">
      <div className="container mx-auto px-4 text-right">
        <h2 className="text-5xl font-bold text-center mb-3 text-white">
          {t("about_title")}
        </h2>
        <p className="text-base text-center text-gray-400">
          {t("about_description")}
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-right">
            <h3 className="text-2xl font-semibold">
              {t("about_high_precision_title")}
            </h3>
            <p className="mt-2 text-gray-300">
              {t("about_high_precision_description")}
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-semibold">
              {t("about_materials_title")}
            </h3>
            <p className="mt-2 text-gray-300">
              {t("about_materials_description")}
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-semibold">
              {t("about_fast_execution_title")}
            </h3>
            <p className="mt-2 text-gray-300">
              {t("about_fast_execution_description")}
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-semibold">
              {t("about_service_variety_title")}
            </h3>
            <p className="mt-2 text-gray-300">
              {t("about_service_variety_description")}
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-semibold">
              {t("about_professional_team_title")}
            </h3>
            <p className="mt-2 text-gray-300">
              {t("about_professional_team_description")}
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-semibold">
              {t("about_competitive_prices_title")}
            </h3>
            <p className="mt-2 text-gray-300">
              {t("about_competitive_prices_description")}
            </p>
          </div>
        </div>
        <div className="mt-32 text-center">
          <h3 className="text-5xl font-bold text-center text-white mb-3">
            {t("about_dentist_title")}
          </h3>
          <p className="text-base text-center text-gray-400 mb-12">
            {t("about_dentist_description")}
          </p>

          <ul className="mt-6 space-y-6 text-right text-lg">
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              {t("about_feature_1")}
            </li>
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              {t("about_feature_2")}
            </li>
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              {t("about_feature_3")}
            </li>
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              {t("about_feature_4")}
            </li>
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              {t("about_feature_5")}
            </li>
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              {t("about_feature_6")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
