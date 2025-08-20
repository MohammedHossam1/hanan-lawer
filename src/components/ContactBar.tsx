import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactBar = () => {
  return (
    <div className="bg-primary-dark text-primary-foreground py-2 text-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex flex-wrap items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+966 11 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@ensaf-law.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} />
            <span>الأحد - الخميس: 8:00 ص - 6:00 م</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;