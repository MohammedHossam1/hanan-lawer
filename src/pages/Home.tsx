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
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language
  const { data } = useGetHomePage(lang)
  const SITE_URL = 'https://hananakel.com/'
  const SITE_NAME = 'Hanan Akel'
  return (
    <main className='overflow-x-hidden min-h-[clac(100dvh-64px)]'>
      <Helmet>
        <title>{t("home.title")}</title>
        <meta name="description" content={t("home.description")} />
        <meta name="keywords" content="Law, Legal, Attorney, Lawyer, Hanan Akel, Legal Consultation" />
        <meta name="author" content="Hanan Akel" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t("home.title")} />
        <meta property="og:description" content={t("home.description")} />
        <meta property="og:image" content={data?.data?.settings?.logo} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:locale" content={lang === 'ar' ? 'ar_AR' : 'he_IL'} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("home.title")} />
        <meta name="twitter:description" content={t("home.description")} />
        <meta name="twitter:image" content={data?.data?.settings?.logo} />

        <link rel="icon" href={'/favicon.ico'} />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: SITE_NAME,
            url: SITE_URL,
            image: data?.data?.settings?.logo,
            description: t("home.description"),
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'PS', 
            },
          })}
        </script>
      </Helmet>
      <Hero data={data?.data?.sliders[0]} exp={data?.data?.settings?.years_of_experience} />
      <About isPage={false} />
      <Services data={data?.data.services} />
      <MinutesWithHanan data={data?.data.videos} />
      <WhyChooseUs data={data?.data.why_choose_us} />
      <Testimonials data={data?.data.customer_rates} />
      <HowWeWork data={data?.data.how_we_works} />
      <SuccessStories data={data?.data.sucess_stories} />
      <Blogs data={data?.data.articles} />
      <CallToAction exp={data?.data?.settings?.years_of_experience} />
    </main>

  );
};

export default Home;
