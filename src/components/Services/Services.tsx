import { Button } from '@/components/ui/button';
import { testimonialsCta, testimonialsCtaHe } from '@/data';
import { useGetHomePage } from '@/hooks/fetch-hooks';
import { IService } from '@/types/Index';
import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../SectionHeader';
import ReservationCalendar from '../shared/Reservation';
import ServiceDetails from './ServiceDetails';

const Services = ({ data }: { data?: IService[] }) => {
  const { t, i18n } = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [cta, setCta] = useState(testimonialsCta);
  const lang = i18n.language
  const { data: home, isLoading } = useGetHomePage(lang)
  useEffect(() => {
    if (i18n.language === 'ar') {
      setCta(testimonialsCta);
    } else {
      setCta(testimonialsCtaHe);
    }
  }, [i18n.language]);
  // if no data prop is provided, use the home page data
  const finalData = data ? data : home?.data?.services
  const sectionHeader = {
    subtitle: t('services.sectionHeader.subtitle'),
    title: t('services.sectionHeader.title'),
    description: t('services.sectionHeader.description')
  };
  if (isLoading) return <div className="overflow-hidden">
    <Loader />
  </div>

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
          {finalData?.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-4 lg:p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="text-accent mb-6 ">
                <img src={service.icon} alt={service.title}  className='size-12'/>
              </div>

              <h3 className=" text-2xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                {service.description}
              </p>
              <Button
                onClick={() => {
                  setSelectedService(service);
                  setOpenDialog(true);
                }}
                variant="ghost" className="text-white hover:text-white bg-foreground hover:bg-accent group-hover:bg-accent group-hover:text-white-foreground">
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

            <ReservationCalendar title={cta.btnConsult} />

            <a href="tel:048877222">

              <Button variant="outline" size="lg" className="text-main border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                {cta.btnCall}
              </Button>

            </a>

          </div>
        </div>
      </div>
      {openDialog && selectedService &&
        <ServiceDetails service={selectedService}
          openDialog={openDialog} setOpenDialog={setOpenDialog} />
      }
    </section>
  );
};


export default Services;
