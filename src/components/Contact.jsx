import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import background from "../assets/imgs/background.jpeg";
import { useTranslation } from "react-i18next";
import Input from "./shared/Input";

function ContactSection() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const contactFormList = [
    {
      key: "name",
      label: t("name_label"),
      type: "text",
      placeholder: t("enter_name"),
    },
    {
      key: "phone",
      label: t("phone_label"),
      type: "number",
      placeholder: t("enter_phone"),
    },
    {
      key: "email",
      label: t("email_label"),
      type: "email",
      placeholder: t("enter_email"),
    },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required(t("validations.name_required")),
    phone: Yup.string().required(t("validations.phone_required")),
    email: Yup.string()
      .email(t("validations.invalid_email"))
      .required(t("validations.email_required")),
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
        formik.resetForm();
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
          {t("contact_section_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={background}
              alt="Contact Image"
              className="h-full object-cover "
            />
          </div>

          <div className="mx-auto bg-black w-full h-full object-cover p-0">
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-6 text-right"
            >
              {contactFormList.map((input) => (
                <Input
                  key={input.key}
                  label={input.label}
                  type={input.type}
                  placeholder={input.placeholder}
                  error={formik.touched[input.key] && formik.errors[input.key]}
                  errorMessage={
                    formik.touched[input.key] && formik.errors[input.key]
                  }
                  onChange={(value) => {
                    formik.setFieldValue(input.key, value);
                  }}
                />
              ))}

              <div>
                <label className="text-white block mb-2 text-start">
                  {t("message_label")}
                </label>
                <textarea
                  {...formik.getFieldProps("message")}
                  className="w-full p-3 bg-[#101010d8] text-white rounded-lg"
                  placeholder={t("enter_message")}
                  rows="4"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  t("sending")
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-paper-plane text-xl"></i>
                    {t("submit_button_text")}
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
                    {t("success_popup_title")}
                  </h3>
                  <p className="text-gray-700 mt-4">
                    {t("success_popup_message")}
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
