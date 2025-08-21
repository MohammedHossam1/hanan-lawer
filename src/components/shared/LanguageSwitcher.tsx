import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "ar" ? "he" : "ar";
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === "ar" ? "rtl" : "rtl";
    };

    return (
        <Button variant="outline" onClick={toggleLanguage}>
            {i18n.language === "ar" ? "ع" : "ע"}

        </Button>
    );
};

export default LanguageSwitcher;
