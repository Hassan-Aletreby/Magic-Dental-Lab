import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => handleLanguageChange("ar")}>العربية</button>
      <button onClick={() => handleLanguageChange("en")}>English</button>
    </div>
  );
}

export default LanguageSwitcher;
