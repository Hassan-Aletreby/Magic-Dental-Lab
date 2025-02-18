import { FaCheckCircle } from "react-icons/fa";

function AboutSection() {
  return (
    <section id="about" className="bg-black py-20 text-white">
      <div className="container mx-auto px-4 text-right">
        <h2 className="text-5xl font-bold text-center mb-3 text-white">
          عن المعمل
        </h2>
        <p className="text-base text-center text-gray-400">
          نحن في "Magic Dental Lab" نعتبر أن الابتسامة هي أول انطباع يتركه
          الشخص، ولذلك نركز بشكل كامل على تقديم أعلى جودة في مجال التركيبات
          السنية
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-right">
            <h3 className="text-2xl font-semibold">دقة التصميم العالية</h3>
            <p className="mt-2 text-gray-300">
              نحن نستخدم أحدث ماكينة طحن وتقنيات الـ CAD CAM المتطورة لضمان
              نتائج مثالية لكل حالة مع أعلى درجات الدقة.
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-semibold">الخامات</h3>
            <p className="mt-2 text-gray-300">
              نلتزم باستخدام مواد طبية معتمدة ومضمونة لضمان منتجات تدوم طويلاً
              وتلبي أعلى معايير الجودة.
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-semibold">تنفيذ سريع</h3>
            <p className="mt-2 text-gray-300">
              نلتزم بتسليم العمل في أسرع وقت، مما يتيح لك تلبية احتياجات مرضاك
              في الوقت المحدد.
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-semibold">تنوع الخدمات</h3>
            <p className="mt-2 text-gray-300">
              نقدم مجموعة متنوعة من التركيبات الثابتة والمتحركة، زراعة الأسنان،
              وحلول تجميلية مع أفضل الخامات.
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-semibold">فريق عمل محترف</h3>
            <p className="mt-2 text-gray-300">
              فريقنا من الفنيين المتخصصين يمتلكون الخبرة والكفاءة اللازمة للحصول
              على أفضل النتائج.
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-semibold">أسعار تنافسية</h3>
            <p className="mt-2 text-gray-300">
              نقدم خدمات ذات جودة عالية بأسعار تناسب جميع العملاء.
            </p>
          </div>
        </div>
        <div className="mt-32 text-center">
          <h3 className="text-5xl font-bold text-center text-white mb-3">
            دكتور أسنان؟ نحن هنا لمساعدتك!
          </h3>
          <p className="text-base text-center text-gray-400 mb-12">
            إذا كنت تدير عيادتك وتبحث عن معمل موثوق يقدم لك كل ما تحتاجه بأحدث
            الأجهزة وأعلى مستوى من الخدمة، فنحن هنا من أجلك.
          </p>

          <ul className="mt-6 space-y-6 text-right text-lg">
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              أجهزة CAD CAM الحديثة ( Xtcera milling machine 500 plus -
              Alliedstar Intra Oral Scanner )
            </li>
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              خدمه intra-oral scanner هتبقي متاحه في عياداتك لتجنب مشاكل manual
              impression
            </li>
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              جميع انواع التركيبات الثابتة
            </li>
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              تصميم (digital smile design) لافضل ابتسامه لمرضاك
            </li>
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              اسعار تنافسية لجعل خدمتنا في متناول الجميع
            </li>
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
              <FaCheckCircle className="text-green-500" />
              مناديب متاحه في المنصورة وجميع المحافظات
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
