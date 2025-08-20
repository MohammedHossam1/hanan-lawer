import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    {
      name: 'الصفحة الرئيسية',
      href: '#',
      hasDropdown: false,
    },
    {
      name: 'عن المكتب',
      href: '#about',
      hasDropdown: false
    },
    {
      name: 'الخدمات',
      href: '#services',
      hasDropdown: false,
      // subItems: ['Corporate Law', 'Criminal Defense', 'Family Law', 'Real Estate']
    },
    {
      name: 'المدونة',
      href: '#',
      hasDropdown: false,
      // subItems: ['Team', 'Case Studies', 'FAQ', 'Testimonials']
    },
    {
      name: 'التواصل',
      href: '#blog',
      hasDropdown: false
    }
  ];

  return (
    <header className="fixsed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-x-3">
            {/* <img src={logo} alt="ENSAF" className="h-10 w-auto" /> */}
            <div className="text-primary-foreground">
              <div className=" font-bold text-xl">مكتب المحامية حنان عقل</div>
              <div className="text-xs text-accent uppercase tracking-wider ">Hanan Akel Law Office</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center gap-x-1 text-primary-foreground hover:text-accent transition-smooth font-medium"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown size={16} />}
                </a>

                {/* Dropdown Menu */}
                {/* {item.hasDropdown && item.subItems && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-md shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-card-foreground hover:bg-accent/10 hover:text-accent transition-smooth"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* contact */}
            <div className="px-4 pt-4 flex items-center gap-4 max-lg:hidden">
              {/* tel */}
              <div className="flex items-center gap-x-2">
                <Phone className="text-accent w-4 h-4" />
                <span className="text-white">+966 11 123 4567</span>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-2">
                <Mail className="text-accent w-4 h-4" />
                <span className="text-white">info@ensaf-law.com</span>
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="py-4 space-y-2">
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
              <div className="px-4 pt-4">
                {/* tel */}
                <div className="flex items-center gap-x-2">
                  <span className="text-card-foreground">+966 11 123 4567</span>
                </div>
                {/* email */}
                <div className="flex items-center gap-x-2">
                  <span className="text-card-foreground">info@ensaf-law.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;