import { Scale, Shield, Home, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

const Services = () => {
  const { t } = useTranslation();

  const services = t("services.items", { returnObjects: true }) as ServiceItem[];

  const sectionHeader = {
    subtitle: t('services.sectionHeader.subtitle'),
    title: t('services.sectionHeader.title'),
    description: t('services.sectionHeader.description')
  };

  const cta = {
    title: t('services.cta.title'),
    description: t('services.cta.description'),
    btnConsult: t('services.cta.btnConsult'),
    btnCall: t('services.cta.btnCall')
  };

  const icons = [<Scale key="scale" />, <Shield key="shield" />, <Home key="home" />, <Users key="users" />, <Briefcase key="briefcase" />];

  return (
    <section className="pt-10 lg:pt-20 bg-background" id='services'>
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          title={sectionHeader.title}
          subTitle={sectionHeader.subtitle}
          desc={sectionHeader.description}
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5 lg:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-4 lg:p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="text-accent mb-6 ">
                {icons[index]}
              </div>

              <h3 className=" text-2xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-card-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full me-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="text-accent hover:text-accent-foreground hover:bg-accent group-hover:bg-accent group-hover:text-accent-foreground">
                {t("services.learnMore")}
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-5 lg:p-12 mb-10">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            {cta.title}
          </h3>
          <p className="text-base lg:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              {cta.btnConsult}
            </Button>
            <Button variant="outline" size="lg" className="text-main border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              {cta.btnCall}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
