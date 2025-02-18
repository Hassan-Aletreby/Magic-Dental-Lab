import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import background from "../assets/imgs/background.jpeg";
// import Input from "./shared/Input";

function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    phone: Yup.string().required("رقم الهاتف مطلوب"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await emailjs.send(
          "service_9bzw7nf",
          "template_19m0vm8",
          {
            from_name: values.name,
            from_phone: values.phone,
            from_email: values.email,
            message: values.message,
          },
          "5hGGMG_5w7oPz74-2"
        );
        setSuccess(true);
        setShowPopup(true);
        formik.resetForm(); // إعادة تعيين البيانات بعد الإرسال الناجح
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <section id="contact" className="py-16 bg-black">
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          تواصل معنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={background}
              alt="Contact Image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mx-auto bg-black w-full h-full object-cover p-0">
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-6 text-right"
            >
              {[
                {
                  key: "name",
                  label: "الاسم",
                  type: "text",
                  placeholder: "أدخل اسمك",
                },
                {
                  key: "phone",
                  label: "رقم الهاتف",
                  type: "number",
                  placeholder: "أدخل رقم هاتفك",
                },
                {
                  key: "email",
                  label: "البريد الإلكتروني",
                  type: "email",
                  placeholder: "أدخل بريدك الإلكتروني",
                },
              ].map((input) => (
                <div key={input.key}>
                  <label className="text-white block mb-2">{input.label}</label>
                  <input
                    {...formik.getFieldProps(input.key)}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-full p-3 bg-[#101010d8] text-white rounded-lg"
                  />
                  {formik.touched[input.key] && formik.errors[input.key] && (
                    <div className="text-red-500 text-sm">
                      {formik.errors[input.key]}
                    </div>
                  )}
                </div>
              ))}

              <div>
                <label className="text-white block mb-2">الرسالة</label>
                <textarea
                  {...formik.getFieldProps("message")}
                  className="w-full p-3 bg-[#101010d8] text-white rounded-lg"
                  placeholder="أدخل رسالتك"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  "جاري الإرسال..."
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-paper-plane text-xl"></i>
                    إرسال الطلب
                  </span>
                )}
              </button>
            </form>

            {showPopup && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                onClick={() => setShowPopup(false)}
              >
                <div className="bg-white p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-green-600">
                    تم الإرسال بنجاح!
                  </h3>
                  <p className="text-gray-700 mt-4">
                    شكراً لتواصلك معنا، سنرد عليك قريباً.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
