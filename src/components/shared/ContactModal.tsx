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
import ContactForm from "./ContactForm";

const ContactModal = () => {
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
          <ContactForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactModal;
