import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-10 lg:py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className=" text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            هل تحتاج لاستشارة قانونية؟
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            احصل على استشارة قانونية مجانية مع خبرائنا المعتمدين. نحن هنا لمساعدتك في حل جميع القضايا القانونية بكفاءة ومهنية عالية.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <Calendar className="ml-2" size={20} />
              احجز استشارتك المجانية الآن
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className=" border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="ml-2" size={20} />
              اتصل الآن: 123-4567
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-primary-foreground/80">خدمة على مدار الساعة</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">1000+</div>
              <div className="text-primary-foreground/80">قضية ناجحة</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">25+</div>
              <div className="text-primary-foreground/80">سنة خبرة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;