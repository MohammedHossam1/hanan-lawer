"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./shared/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { name: t("header.nav.home"), href: "/", hasDropdown: false },
    { name: t("header.nav.about"), href: "/about", hasDropdown: false },
    { name: t("header.nav.services"), href: "/services", hasDropdown: false },
    { name: t("header.nav.whyUs"), href: "/#why-us", hasDropdown: false },
    { name: t("header.nav.testimonials"), href: "/#testimonials", hasDropdown: false },
    { name: t("header.nav.contact"), href: "/#contact", hasDropdown: false }
  ];

  return (
    <header className="h-[64px]">
      <div className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-x-3">
              <div className="text-primary-foreground">
                <div className="font-bold text-xl">{t("header.logoTitle")}</div>
                <div className="text-xs text-accent uppercase tracking-wider">
                  {t("header.logoSubtitle")}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="flex items-center gap-x-1 text-primary-foreground hover:text-accent transition-smooth font-medium"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* contact */}
              <div className="flex items-center gap-4 max-lg:hidden">
                <div className="flex items-center gap-x-2">
                  <Phone className="text-accent w-4 h-4" />
                  <span className="text-white">{t("header.phone")}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Mail className="text-accent w-4 h-4" />
                  <span className="text-white">{t("header.email")}</span>
                </div>
              </div>
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-primary-foreground hover:text-accent transition-smooth"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden bg-card w-full border-t shadow-md"
              >
                <div className="py-4 space-y-2 flex flex-col items-center ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-card-foreground hover:bg-accent/10 hover:text-accent transition-smooth"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  {/* contact */}
                  <div className="px-4 pt-4 border-t border-border mt-2">
                    <div className="text-center">
                      <span className="text-card-foreground text-center">{t("header.phone")}</span>
                    </div>
                    <div className="flex items-center gap-x-2 mt-2">
                      <span className="text-card-foreground">{t("header.email")}</span>
                    </div>
                  </div>
                  <div className="lg:hidden">
                    <LanguageSwitcher />
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
