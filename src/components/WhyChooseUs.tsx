import { IWhyChooseUs } from "@/types/Index";
import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";



const WhyChooseUs = ({ data }: { data: IWhyChooseUs[] }) => {
  const { t } = useTranslation();


  return (
    <section id="why-us" className="pt-10 lg:pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title={t("whyChooseUs.sectionHeader.title")}
          subTitle={t("whyChooseUs.sectionHeader.subtitle")}
          desc={t("whyChooseUs.sectionHeader.description")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data?.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="size-10 mx-auto my-2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="w-full "
                />
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
