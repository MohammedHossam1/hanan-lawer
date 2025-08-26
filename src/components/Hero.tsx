import heroImage from '@/assets/hero.png';
import heroImageRemoved from '@/assets/hero-removed.png';
import { useTranslation } from 'react-i18next';
import ReservationCalendar from './shared/Reservation';

const Hero = () => {

  const { t } = useTranslation();
  const imageSec = window.innerWidth < 1024 ? heroImageRemoved : heroImage
  return (
    <section className="md:min-h-[60vh] lg:h-[calc(100dvh-64px)] bg-gradient-hero relative overflow-hidden ">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white/20 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 lg:px-8 pt-8 lg:pb-1">
        <div className="grid grid-cols-2 gap-2 lg:gap-12 items-center lg:min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-2   lg:space-y-8 animate-in slide-in-from-right duration-700 ">
            <div className="space-y-2" >
              <h1 className=" text-4xl  text-nowrap md:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight  lg:flex lg:flex-col gap-2 max-lg:items-center">
                {t('hero.subtitle1')}<br className='lg:hidden' />
                <span className=" text-white">
                  {" "} {t('hero.subtitle2')}
                </span>
              </h1>

            </div>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
              {t('hero.title')}
            </p>
            <div className="md:hidden flex flex-col sm:flex-row gap-4 relative z-10">
              <ReservationCalendar />
            </div>
            {/* reserve button */}
            <div className="max-md:hidden flex flex-col sm:flex-row gap-4 relative z-10">
              <ReservationCalendar />
            </div>

          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-in slide-in-from-left duration-700 delay-200 max-lg:mt-5 ">
            <div className="relative max-xl:flex flex-col  gap-2 ">
              {/* Main Image */}
              <div className="relative z-10 h-full ">
                <img
                  src={imageSec}
                  alt="Professional Legal Consultant"
                  className="w-full max-w-lg max-h-lg lg:h-[350px] md:h-full object-top object-contain lg:object-cover max-lg:ms-auto lg:mx-auto lg:rounded-2xl lg:shadow-glow "
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute max-lg:hidden -top-4 -right-4 z-20 ">
                <div className="bg-accent text-white-foreground px-6 py-3 rounded-full shadow-elegant">
                  <div className="text-center text-white">
                    <div className="font-bold  text-lg">25+</div>
                    <div className="text-sm">{t('hero.experience')}</div>
                  </div>
                </div>
              </div>
              {/* reserve button */}
              {/* <div className="md:hidden flex flex-col sm:flex-row gap-4">
                <ReservationCalendar />
              </div> */}

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-accent/30 rounded-full"></div>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;