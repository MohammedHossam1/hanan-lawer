import { Award, Users, TrendingUp, Shield } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useTranslation } from "react-i18next";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: <Award className="w-12 h-12" />,
      title: t("whyChooseUs.items.0.title"),
      description: t("whyChooseUs.items.0.description"),
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: t("whyChooseUs.items.1.title"),
      description: t("whyChooseUs.items.1.description"),
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: t("whyChooseUs.items.2.title"),
      description: t("whyChooseUs.items.2.description"),
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: t("whyChooseUs.items.3.title"),
      description: t("whyChooseUs.items.3.description"),
    },
  ];

  return (
    <section id="why-us" className="pt-10 lg:pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title={t("whyChooseUs.sectionHeader.title")}
          subTitle={t("whyChooseUs.sectionHeader.subtitle")}
          desc={t("whyChooseUs.sectionHeader.description")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-white mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
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
