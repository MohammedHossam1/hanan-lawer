"use client";

import ContactForm from "./shared/ContactForm";
import ReservationCalendar from "./shared/Reservation";
import { useTranslation } from "react-i18next";

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 lg:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {t("callToAction.title")}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            {t("callToAction.description")}
          </p>

          {/* Reservation & Contact Form */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ReservationCalendar />
            <ContactForm />
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">{t("callToAction.stats.24_7")}</div>
              <div className="text-primary-foreground/80">{t("callToAction.stats.24_7_desc")}</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">{t("callToAction.stats.cases")}</div>
              <div className="text-primary-foreground/80">{t("callToAction.stats.cases_desc")}</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">{t("callToAction.stats.experience")}</div>
              <div className="text-primary-foreground/80">{t("callToAction.stats.experience_desc")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
