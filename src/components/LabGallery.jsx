import { useState } from "react";
import { useTranslation } from "react-i18next";

// import Lab1 from "../assets/imgs/magic1.jpg";
// import Lab2 from "../assets/imgs/magic2.jpg";
// import Lab3 from "../assets/imgs/magic3.jpg";
// import Lab4 from "../assets/imgs/magic4.jpg";
// import Lab5 from "../assets/imgs/magic5.jpg";
// import Lab6 from "../assets/imgs/magic6.jpg";
// import Lab7 from "../assets/imgs/magic7.jpg";
import Lab8 from "../assets/imgs/magic8.jpg";
import Lab9 from "../assets/imgs/magic9.jpg";
import Lab10 from "../assets/imgs/magic10.jpg";
import Lab11 from "../assets/imgs/magic11.jpg";
import Lab12 from "../assets/imgs/magic12.jpeg";
import Lab13 from "../assets/imgs/magic13.jpeg";
import Lab14 from "../assets/imgs/slider3.jpeg";
import Lab15 from "../assets/imgs/magic6.jpg";
import Lab16 from "../assets/imgs/slider5.jpeg";
import Lab17 from "../assets/imgs/magic14.jpeg";
import Lab18 from "../assets/imgs/1.jpeg";
import Lab19 from "../assets/imgs/2.jpeg";
import Lab20 from "../assets/imgs/3.jpeg";
import Lab21 from "../assets/imgs/magic15.jpeg";
import Lab22 from "../assets/imgs/magic16.jpeg";
import Lab23 from "../assets/imgs/magic17.jpeg";

function LabGallery() {
  const { t } = useTranslation();

  const images = [
    // Lab1,
    // Lab2,
    // Lab3,
    // Lab4,
    // Lab5,
    // Lab6,
    // Lab7,
    Lab8,
    Lab10,
    Lab11,
    Lab14,
    Lab12,
    Lab9,
    Lab13,
    Lab17,
    Lab20,
    Lab21,
    Lab15,
    Lab18,
    Lab22,
    Lab19,
    Lab23,
    Lab16,
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">
          {t("lab_gallery")}
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(index)}>
              <img
                src={img}
                alt={`Lab ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 animate-fadeIn">
            <button
              className="absolute top-5 right-5 text-white text-4xl font-bold"
              onClick={closeLightbox}>
              &times;
            </button>

            <button
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl font-bold p-2"
              onClick={prevImage}>
              &#10094;
            </button>

            <img
              src={images[currentIndex]}
              alt={`Lab ${currentIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl transition-all duration-300 animate-zoomIn"
            />

            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl font-bold p-2"
              onClick={nextImage}>
              &#10095;
            </button>
          </div>
        )}

        {/* Animations */}
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-in-out;
            }

            @keyframes zoomIn {
              from { transform: scale(0.9); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
            .animate-zoomIn {
              animation: zoomIn 0.3s ease-in-out;
            }
          `}
        </style>
      </div>
    </section>
  );
}

export default LabGallery;
