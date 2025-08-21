"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="lg"
        className="border-primary-foreground hover:bg-primary-foreground hover:text-primary"
        onClick={() => setOpenForm(true)}
      >
        <Phone className="ml-2" size={20} />
        {t("contactForm.button")}
      </Button>

      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{t("contactForm.title")}</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <input
              required
              type="text"
              placeholder={t("contactForm.name")}
              className="w-full border rounded-lg p-2"
            />
            <input
              required
              type="tel"
              placeholder={t("contactForm.phone")}
              className="w-full border rounded-lg p-2 placeholder:!text-end"
            />
            <input
              required
              type="email"
              placeholder={t("contactForm.email")}
              className="w-full border rounded-lg p-2"
            />
            <textarea
              required
              placeholder={t("contactForm.message")}
              className="w-full border rounded-lg p-2"
            />
            <Button type="submit" className="w-full">
              {t("contactForm.send")}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
