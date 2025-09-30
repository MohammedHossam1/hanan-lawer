import { Button } from "@/components/ui/button";
import { ISettings } from "@/types/Index";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Footer = ({ data }: { data: ISettings }) => {
  const { t } = useTranslation();

  const navigation = [
    { name: t("header.nav.home"), href: "/" },
    { name: t("header.nav.about"), href: "/about" },
    { name: t("header.nav.services"), href: "/services" },
    { name: t("header.nav.whyUs"), href: "/#why-us" },
    { name: t("header.nav.testimonials"), href: "/#testimonials" },
    { name: t("header.nav.blogs"), href: "/#blogs" },
  ];



  const legalPages = [
    { name: t("footer.legal.privacy"), href: "/legal/privacy" },
    { name: t("footer.legal.terms"), href: "/legal/terms" },
    { name: t("footer.legal.faq"), href: "/legal/faq" },
    { name: t("footer.legal.disclaimer"), href: "/legal/disclaimer" }
  ];

  const socials = [
    { icon: Facebook, label: t("footer.socials.facebook"), href: data?.social_media?.facebook },
    { icon: Instagram, label: t("footer.socials.instagram"), href: data?.social_media?.instagram},
    { icon: Twitter, label: t("footer.socials.instagram"), href: data?.social_media?.twitter}
  ];

  const contacts = [
    { icon: MapPin, text: data?.address},
    { icon: Phone, text: data?.contact.mobile },
    { icon: Mail, text: data?.contact.email}
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-x-3 rounded-full" >
                <img src={logo} alt="logo" className="w-24 rounded-full" />
              </Link>

            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">{t("footer.company.description")}</p>


            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }, i) => (
                <Button key={i} variant="ghost" size="sm"  className="text-primary-foreground hover:text-white hover:bg-primary-foreground/10">
                  <a href={href} aria-label={label} target="_blank">
                    <Icon size={20} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("footer.quickLinks.title")}</h3>
            <ul className="space-y-3">
              {navigation.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-white transition-smooth">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("footer.contact.title")}</h3>
            <div className="space-y-4">
              {contacts.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-x-3">
                  <Icon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <p className="text-primary-foreground/80">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8"  >
          <div className="flex flex-col md:flex-row justify-between max-lg:text-center items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">{t("footer.bottom.rights") + " © " + new Date().getFullYear()}</div>
            <div className="flex flex-wrap gap-6 max-lg:text-center">
              {legalPages.map((page, index) => (
                <a key={index} href={page.href} className="text-primary-foreground/60 hover:text-white text-sm transition-smooth">
                  {page.name}
                </a>
              ))}
            </div>
            <div className="">
              <p className="text-primary-foreground/60 text-sm">{t("footer.bottom.powered")} {" "}
                <a href="https://qadi-tech.com/home" className="font-bold">Qadi-tech</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
