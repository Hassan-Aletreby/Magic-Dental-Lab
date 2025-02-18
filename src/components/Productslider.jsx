import { useState, useEffect } from "react";
import Product1 from "../assets/imgs/slider23.jpg";
import Product2 from "../assets/imgs/slider24.jpg";
import Product3 from "../assets/imgs/slider22.jpeg";

const Products = [
  {
    id: 1,
    image: Product1,
  },
  {
    id: 2,
    image: Product2,
  },
  {
    id: 3,
    image: Product3,
  },
];

function Productslider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-16">
      <section className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-right px-8 text-white mb-8 lg:mb-0">
          <h2 className="text-5xl font-bold mb-4">ابتسامتك أولويتنا</h2>
          <p className="text-xl">
            نحن نقدم زراعة الأسنان عالية الجودة والتركيبات المتقدمة لضمان راحة
            المريض وتحقيق نتائج دائمة وجميلة.
          </p>
        </div>

        <div className="relative w-full lg:w-1/2 h-[500px] overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          >
            {Products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-full h-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              ></div>
            ))}
          </div>

          <div className="absolute bottom-4 right-1/2 transform translate-x-1/2 flex space-x-2">
            {Products.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  activeIndex === index ? "bg-white" : "bg-gray-800"
                }`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productslider;
