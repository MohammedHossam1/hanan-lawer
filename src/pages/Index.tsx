import About from '@/components/About';
import Blogs from '@/components/Blogs/Index';
import CallToAction from '@/components/CallToAction';
import Hero from '@/components/Hero';
import HowWeWork from '@/components/HowWeWorks/Index';
import MinutesWithHanan from '@/components/MinutesWithHanan/Index';
import Services from '@/components/Services/Services';
import SuccessStories from '@/components/SuccessStories/Index';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';

const Index = () => {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <About isPage={false} />
      <Services />
      <MinutesWithHanan />
      <WhyChooseUs />
      <Testimonials />
      <HowWeWork />
      <SuccessStories />
      <Blogs />
      <CallToAction />
    </main>
  );
};

export default Index;
