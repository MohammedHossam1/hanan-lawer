import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import LanguageSwitcher from "../shared/LanguageSwitcher";
import NavigationLinks from "./NavigationLinks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = useMemo(() => [
    { name: t("header.nav.home"), href: "/" },
    { name: t("header.nav.about"), href: "/about" },
    { name: t("header.nav.services"), href: "/services" },
    { name: t("header.nav.whyUs"), href: "/#why-us" },
    { name: t("header.nav.testimonials"), href: "/#testimonials" },
    { name: t("header.nav.blogs"), href: "/#blogs" },
    { name: t("header.nav.contact"), href: "/#contact" },
  ], [t]); 



  return (
    <header className="h-[64px]">
      <div className="fixed top-0 w-full z-50 bg-primary backdrop-blur-sm border-b border-primary-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-x-3 rounded-full max-lg:order-1" >
              <img src={logo} alt="logo" className="size-12 rounded-full" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-x-8">
              <NavigationLinks navigation={navigation} />
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center space-x-4 max-lg:order-3" >
              {/* contact */}
              <div className="flex items-center gap-4 max-lg:hidden ">
                <div className="flex items-center gap-x-2 text-sm">
                  <Phone className="text-white w-4 h-4" />
                  <span className="text-white">{t("header.phone")}</span>
                </div>
                <div className="flex items-center gap-x-2 text-sm">
                  <Mail className="text-white w-4 h-4" />
                  <span className="text-white">{t("header.email")}</span>
                </div>
              </div>
              {/* Mobile menu button */}
              <div className="flex items-center gap-x-2 ">
                <div className="lg:hidden">
                  <LanguageSwitcher />
                </div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-primary-foreground hover:text-white transition-smooth"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
            <div className="max-lg:hidden">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-white w-full border-t shadow-md"
              >
                <div className="py-4 space-y-2 flex flex-col items-center">
                  <NavigationLinks
                    navigation={navigation}
                    onClick={() => setIsMenuOpen(false)}
                  />
                  {/* contact */}
                  <div className="px-4 pt-4 border-t border-border mt-2">
                    <div className="text-center">
                      <span className="text-card-foreground text-center">
                        {t("header.phone")}
                      </span>
                    </div>
                    <div className="flex items-center gap-x-2 mt-2">
                      <span className="text-card-foreground">
                        {t("header.email")}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
