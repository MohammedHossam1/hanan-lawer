import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t("footer.quickLinks.links.home"), href: "#" },
    { name: t("footer.quickLinks.links.about"), href: "#about" },
    { name: t("footer.quickLinks.links.contact"), href: "#contact" }
  ];

  // const services = [
  //   { name: t("footer.services.items.business"), href: "#" },
  //   { name: t("footer.services.items.criminal"), href: "#" },
  //   { name: t("footer.services.items.realEstate"), href: "#" },
  //   { name: t("footer.services.items.family"), href: "#" },
  //   { name: t("footer.services.items.consulting"), href: "#" }
  // ];

  const legalPages = [
    { name: t("footer.legal.privacy"), href: "#" },
    { name: t("footer.legal.terms"), href: "#" },
    { name: t("footer.legal.faq"), href: "#" },
    { name: t("footer.legal.disclaimer"), href: "#" }
  ];

  const socials = [
    { icon: Facebook, label: t("footer.socials.facebook"), href: "#" },
    { icon: Twitter, label: t("footer.socials.twitter"), href: "#" },
    { icon: Linkedin, label: t("footer.socials.linkedin"), href: "#" },
    { icon: Instagram, label: t("footer.socials.instagram"), href: "https://www.instagram.com/hananakellawoffice" }
  ];

  const contacts = [
    { icon: MapPin, text: t("footer.contact.address") },
    { icon: Phone, text: t("footer.contact.phone1") },
    { icon: Phone, text: t("footer.contact.phone2") },
    { icon: Mail, text: t("footer.contact.email") }
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
                <Button key={i} variant="ghost" size="sm" asChild className="text-primary-foreground hover:text-white hover:bg-primary-foreground/10">
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
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-white transition-smooth">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="text-xl font-bold mb-6">{t("footer.services.title")}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-primary-foreground/80 hover:text-white transition-smooth">{service.name}</a>
                </li>
              ))}
            </ul>
          </div> */}

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
              <a href="https://qadi-tech.com/home" className="font-bold">El Qadi-tech</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
