import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded-md text-sm ${
          i18n.language === "en"
            ? "bg-green-600 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => changeLanguage("hi")}
        className={`px-3 py-1 rounded-md text-sm ${
          i18n.language === "hi"
            ? "bg-green-600 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        HI
      </button>
    </div>
  );
};

export default LanguageSwitcher;
