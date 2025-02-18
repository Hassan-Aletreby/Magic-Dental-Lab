import CAD from "../assets/imgs/1.jpeg";
import Zirconia from "../assets/imgs/2.jpeg";
import MultiLayer from "../assets/imgs/3.jpeg";
import EMax from "../assets/imgs/4.jpeg";
import PFM from "../assets/imgs/PFM.png";
import Zolid from "../assets/imgs/Zolid.jpeg";

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "تصميم و تصنيع رقمي (CAD-CAM)",
      image: CAD,
      alt: "تقنية CAD-CAM",
      features: [
        "تصميم دقيق ثلاثي الأبعاد",
        "تصنيع التيجان والجسور في ساعات",
        "خالية من الأخطاء البشرية",
      ],
    },
    {
      id: 2,
      title: "تيجان Full Zirconia",
      image: Zirconia,
      alt: "تيجان زركونيا كاملة",
      features: [
        "أقوى أنواع الزركونيا (1400 MPa)",
        "مناسبة للأضراس والخلفية",
        "خالية من المعدن تمامًا",
      ],
    },
    {
      id: 3,
      title: "Zirconia Multi-Layer",
      image: MultiLayer,
      alt: "زركونيا متعددة الطبقات",
      features: [
        "طبقات متدرجة لشفافية طبيعية",
        "مثالية للأسنان الأمامية",
        "قوة تحمل تصل إلى 850 MPa",
      ],
    },
    {
      id: 4,
      title: "E-Max (ليثيوم ديسيليكات)",
      image: EMax,
      alt: "حلول E-Max",
      features: [
        "شفافية عالية كالأسنان الطبيعية",
        "نوعان: E-Max Press و E-Max CAD",
        "للحشوات والتيجان الأمامية",
      ],
    },
    {
      id: 5,
      title: "تيجان خزفية على معدنية (PFM)",
      image: PFM,
      alt: "تيجان PFM",
      features: [
        "مزج بين متانة المعدن وجمال الخزف",
        "متوافقة مع نظام Vita 3D Master للألوان",
        "خيار اقتصادي متين",
      ],
    },
    {
      id: 6,
      title: "سلسلة Zolid (HT & FX)",
      image: Zolid,
      alt: "سلسلة Zolid",
      features: [
        "Zolid HT: شفافية عالية",
        "Zolid FX: مرونة وقوة",
        "مناسبة لجميع أنواع التعويضات",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 bg-black pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          خدماتنا
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#101010d8] truncate rounded-xl transition-all duration-300 ease-in-out text-right  hover:bg-[#3838387a]"
            >
              <div className="w-full max-h-48 h-48 flex items-center justify-center truncate overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full object-cover transition-transform duration-300  hover:rotate-3 hover:scale-[1.1] "
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
