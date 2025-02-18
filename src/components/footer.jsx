import {
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white border-t-1 border-gray-500 py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <a
              href="/"
              className="flex items-center justify-start text-white mb-3"
            >
              <img
                src="/src/assets/imgs/logo3.jpg"
                alt="logo-img"
                className="w-15 h-15 rounded-4xl"
              />
              <div className="logo__text text-left ml-4">
                <h2 className="text-xl font-bold">MAGIC</h2>
                <p className="text-xs">Dental Lab</p>
              </div>
            </a>
            <div className="flex items-center justify-center gap-6">
              <p className="text-lg ">{t("Anas_Fawzy")}</p>
              <p className="text-lg ">{t("Ahmed_Sameh")}</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-lg mb-3">{t("footer_address")}</p>
            <a
              href={`mailto:${t("footer_email")}`}
              className="text-gray-400 hover:text-white mb-3 flex items-center justify-center gap-2"
            >
              <FaEnvelope size={20} className="inline-block mr-2" />
              {t("footer_email")}
            </a>
            <div className="flex items-center justify-center gap-6">
              <a
                href="tel:+201234567890"
                className="text-gray-400 hover:text-white flex items-center justify-center gap-2"
              >
                <FaPhoneAlt size={20} />
                <span dir="ltr">{t("footer_phone1")}</span>
              </a>
              <a
                href="tel:+201020453469"
                className="text-gray-400 hover:text-white flex items-center justify-center gap-2"
              >
                <FaPhoneAlt size={20} />
                <span dir="ltr">{t("footer_phone2")}</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-3">
              <a
                href="https://www.facebook.com/profile.php?id=61569695740756"
                className="text-gray-400 hover:text-white flex items-center justify-center gap-2"
              >
                <FaFacebook size={20} />
                <span>{t("footer_facebook")}</span>
              </a>
            </div>

            <div className="mb-3">
              <a
                href="https://wa.me/201063254311"
                className="text-gray-400 hover:text-white flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={20} />
                <span>{t("footer_whatsapp")}</span>
              </a>
            </div>

            <div>
              <a
                href="https://www.tiktok.com/@magic.dental.lab7?_t=ZS-8u0AFeJbjlf&_r=1"
                className="text-gray-400 hover:text-white flex items-center justify-center gap-2"
              >
                <FaTiktok size={20} />
                <span>{t("footer_tiktok")}</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-center">{t("footer_rights")}</p>
      </div>
    </footer>
  );
}

export default Footer;
