import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'الصفحة الرئيسية', href: '#' },
    { name: 'عن المكتب', href: '#about' },
    { name: 'الخدمات', href: '#services' },
    { name: 'المدونة', href: '#blog' },
    { name: 'اتصل بنا', href: '#contact' }
  ];

  const services = [
    { name: 'القانون التجاري', href: '#' },
    { name: 'الدفاع الجنائي', href: '#' },
    { name: 'قانون العقارات', href: '#' },
    { name: 'قانون الأسرة', href: '#' },
    { name: 'الاستشارات القانونية', href: '#' }
  ];

  const legalPages = [
    { name: 'سياسة الخصوصية', href: '#' },
    { name: 'الشروط والأحكام', href: '#' },
    { name: 'الأسئلة الشائعة', href: '#' },
    { name: 'إخلاء المسؤولية', href: '#' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-x-3 mb-6">
              {/* <img src={logo} alt="ENSAF" className="h-10 w-auto" /> */}
              <div className="text-primary-foreground">
                <div className=" font-bold text-xl">مكتب المحامية حنان عقل</div>
                <div className="text-xs text-accent uppercase tracking-wider ">Hanan Akel Law Office</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              مكتب إنصاف للمحاماة والاستشارات القانونية، نقدم خدمات قانونية متميزة مع فريق من أمهر المحامين المعتمدين.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Instagram size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    شارع الملك فهد، حي العليا<br />
                    الرياض 12345، المملكة العربية السعودية
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80">+966 11 123 4567</p>
              </div>
              <div className="flex items-center gap-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80">info@ensaf-law.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 مكتب إنصاف للمحاماة. جميع الحقوق محفوظة.
            </div>
            <div className="flex flex-wrap gap-6">
              {legalPages.map((page, index) => (
                <a
                  key={index}
                  href={page.href}
                  className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth"
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;