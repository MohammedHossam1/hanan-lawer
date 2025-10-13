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
import { useGetHomePage } from '@/hooks/fetch-hooks';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const {i18n } = useTranslation();
  const lang = i18n.language
  const { data } = useGetHomePage(lang)

  return (
    <main className='overflow-x-hidden min-h-[clac(100dvh-64px)]'>
      <Hero data={data?.data?.sliders[0]} exp={data?.data?.settings?.years_of_experience} />
      <About isPage={false} />
      <Services data={data?.data.services}/>
      <MinutesWithHanan data={data?.data.videos}/>
      <WhyChooseUs data={data?.data.why_choose_us}/>
      <Testimonials data={data?.data.customer_rates}/>
      <HowWeWork data={data?.data.how_we_works}/>
      <SuccessStories data={data?.data.sucess_stories}/>
      <Blogs data={data?.data.articles}/>
      <CallToAction exp={data?.data?.settings?.years_of_experience}/>
    </main>

  );
};

export default Home;
