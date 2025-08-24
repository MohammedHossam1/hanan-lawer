"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <form className="space-y-4">
        <input
          required
          type="text"
          placeholder={t("contactForm.name")}
          className="w-full border rounded-lg p-2 lg:p-3"
        />
        <input
          required
          type="tel"
          placeholder={t("contactForm.phone")}
          className="w-full border rounded-lg p-2 lg:p-3 placeholder:!text-end"
        />
        <input
          required
          type="email"
          placeholder={t("contactForm.email")}
          className="w-full border rounded-lg p-2 lg:p-3"
        />
        <textarea
          required
          placeholder={t("contactForm.message")}
          className="w-full border rounded-lg p-2 lg:p-3"
        />
        <Button type="submit" className="w-full !bg-gradient-hero text-white">
          {t("contactForm.send")}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
