import { useTranslation } from "react-i18next";
import aboutImg from "../assets/about.jpg";

const About = ({ isPage = true }: { isPage?: boolean }) => {
  const { t } = useTranslation();
  const specialties = t("about.specialties_list", { returnObjects: true }) as string[];

  return (
    <section className={`pt-10 max-lg:pb-5 lg:pt-20 relative overflow-hidden ${isPage ? " min-h-[calc(100dvh-64px)]" : ""}`}>
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center gap-2 flex-col">
          <div className="text-start max-w-3xl mx-auto mb-5 space-y-2 lg:space-y-5">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary">
              {t("about.title")}
            </h2>
            <p className="text-base lg:text-xl text-muted-foreground leading-relaxed lg:w-5/6">
              {t("about.description")}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg lg:text-2xl font-semibold text-accent">
              {t("about.specialties_title")}
            </h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              {specialties.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <img
            src={aboutImg}
            alt="Office"
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
