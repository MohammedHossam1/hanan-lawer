import About from '@/components/About';
import CallToAction from '@/components/CallToAction';
import Hero from '@/components/Hero';
import Services from '@/components/Services/Services';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import ThemeColorPicker from '@/components/shared/ChangeColors';

const Index = () => {
  
  return (
      <main className='overflow-x-hidden'>
        <Hero />
        <About isPage={false} />
        <Services />
        <ThemeColorPicker />

        <WhyChooseUs />
        <Testimonials  />
        <CallToAction />
      </main>
  );
};

export default Index;
