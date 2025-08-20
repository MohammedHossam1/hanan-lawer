import heroImage from '@/assets/hero.png';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';   

const Hero = () => {
  const testimonialAvatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',

    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
  ];
  const { t } = useTranslation();

  return (
    <section className="xl:h-[calc(100dvh)] bg-gradient-hero relative overflow-hidden ">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 lg:px-8 pt-8 pb-1">
        <div className="grid md:grid-cols-2 gap-2 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-2   lg:space-y-8 animate-in slide-in-from-right duration-700">
            <div className="space-y-2">
              <h1 className=" text-3xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight  flex lg:flex-col gap-2 max-lg:items-center">
                {t('hero.subtitle1')}
                <span className=" text-accent">
                  {t('hero.subtitle2')}
                </span>
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
              {t('hero.title')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group w-fit">
                {t('hero.button')}
                <ArrowLeft className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </div>

            {/* Testimonial Section */}
            <div className="flex items-center gap-x-4 pt-4 lg:pt-8 " >
              <div className="flex -space-x-3 "  dir='ltr'>
                {testimonialAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Client ${index + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-accent object-cover"
                  />
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-1 max-lg:flex-col">
                  <span className="text-primary-foreground font-semibold max-lg:text-xs">{t('hero.testimonial')}</span>
                </div>
                <div className="flex items-center space-x-1 ">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                  <span className="text-primary-foreground/70 text-sm ml-2">4.5/5 (35+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-in slide-in-from-left duration-700 delay-200 max-lg:mt-5">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Professional Legal Consultant"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-glow object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 z-20">
                <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-elegant">
                  <div className="text-center">
                    <div className="font-bold text-lg">25+</div>
                    <div className="text-sm">{t('hero.experience')}</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-accent/30 rounded-full"></div>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Services Preview */}
      <div className="xl:absolute bottom-0 left-0 right-0 bg-primary-foreground/10 backdrop-blur-sm border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-6 gap-6 items-center  justify-items-center opacity-70">
            {[
              { icon: '⚖️', label: 'Corporate Law' },
              { icon: '🏛️', label: 'Criminal Defense' },
              { icon: '🏠', label: 'Real Estate' },
              { icon: '👨‍👩‍👧‍👦', label: 'Family Law' },
              { icon: '💼', label: 'Business Law' },
              { icon: '🏢', label: 'Law Office' }
            ].map((service, index) => (
              <div key={index} className="text-center space-y-2 group cursor-pointer">
                <div className="text-3xl group-hover:scale-110 transition-transform">{service.icon}</div>
                <div className="text-primary-foreground text-xs font-medium">{service.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;