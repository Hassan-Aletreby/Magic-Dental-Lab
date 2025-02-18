import {
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
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
              <p className="text-lg ">د. أنس فوزى</p>
              <p className="text-lg ">د. أحمد سامح</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-lg mb-3">
              العنوان : المنصورة - طلخا - شارع صلاح سالم
            </p>
            <a
              href="mailto:magicdentallab54@gmail.com"
              className="text-gray-400 hover:text-white mb-3 flex items-center justify-center gap-2"
            >
              <FaEnvelope size={20} className="inline-block mr-2" />
              magicdentallab54@gmail.com
            </a>
            <div className="flex items-center justify-center gap-6">
              <a
                href="tel:+201234567890"
                className="text-gray-400 hover:text-white flex items-center justify-center gap-2"
              >
                <FaPhoneAlt size={20} />
                <span dir="ltr">+20 10 63254311</span>
              </a>
              <a
                href="tel:+201020453469"
                className="text-gray-400 hover:text-white flex items-center justify-center gap-2"
              >
                <FaPhoneAlt size={20} />
                <span dir="ltr">+20 10 20453469</span>
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
                <span>فيسبوك</span>
              </a>
            </div>

            <div className="mb-3">
              <a
                href="https://wa.me/201063254311"
                className="text-gray-400 hover:text-white flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={20} />
                <span>واتساب</span>
              </a>
            </div>

            <div>
              <a
                href="https://www.tiktok.com/@magic.dental.lab7?_t=ZS-8u0AFeJbjlf&_r=1"
                className="text-gray-400 hover:text-white flex items-center justify-center gap-2"
              >
                <FaTiktok size={20} />
                <span>تيك توك</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-center">
          &copy; 2025 MAGIC Dental Lab , All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
