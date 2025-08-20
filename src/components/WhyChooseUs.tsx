import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import SectionHeader from './SectionHeader';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'خبرة أكثر من 25 عاماً',
      description: 'فريق من المحامين ذوي الخبرة الطويلة في مختلف المجالات القانونية'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'فريق متخصص',
      description: 'محامون معتمدون ومتخصصون في القانون السعودي والدولي'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'نتائج مثبتة',
      description: 'سجل حافل من النجاحات والانتصارات القانونية لصالح عملائنا'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'سرية تامة',
      description: 'نضمن الحفاظ على سرية المعلومات والمستندات بأعلى معايير الأمان'
    }
  ];

  return (
    <section className=" bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold text-lg mb-4"></p>
          <h2 className=" text-4xl lg:text-5xl font-bold text-card-foreground mb-6">

          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">

          </p>
        </div>
        <SectionHeader
          title={" نحن الخيار الأمثل لخدماتكم القانونية"}
          subTitle={"لماذا تختارنا"}
          desc={" نقدم خدمات قانونية متميزة تجمع بين الخبرة العريقة والحلول المبتكرة لضمان حماية حقوقكم ومصالحكم"}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-accent mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className=" text-xl font-bold text-card-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;