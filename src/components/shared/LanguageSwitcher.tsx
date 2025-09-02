import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "he" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "rtl"; 
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2 max-md:px-3 max-md:py-0  max-md:h-7 rounded-full border-accent text-accent hover:bg-white hover:text-accent  transition-all duration-300"
      >
        <Globe className="!size-4 max-md:hidden" />
        <span className="font-medium text-[11px] md:text-sm ">
          {i18n.language === "ar" ? "عربي" : "עברית"}
        </span>
      </Button>
    </motion.div>
  );
};

export default LanguageSwitcher;
