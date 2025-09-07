"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "@/hooks/use-toast";

const ReservationCalendar = ({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) => {
  const { t } = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);
  const [step, setStep] = useState<"calendar" | "form">("form");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [formValues, setFormValues] = useState<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleReservation() {
    setIsLoading(true);
    if (formValues && selectedDate) {
      const todayOnly = selectedDate.toISOString().split("T")[0]; 
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "reservation_date";
      hiddenInput.value = todayOnly;
      formValues.appendChild(hiddenInput);

      emailjs
        .sendForm(
          "service_5yoabqk",
          "template_12adeom",
          formValues,
          "VHEeupUp96UPoCWa_"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setIsLoading(false);

            toast({
              title: t("contactForm.success"),
              className: "bg-green-500 text-white",
            });
            setStep("form");
            setOpenDialog(false);
            formValues.reset();
          },
          (error) => {
            setIsLoading(false);
            console.error("FAILED...", error.text);
            toast({
              title: t("contactForm.error"),
              className: "bg-red-500 text-white",
            });
          }
        );
    }
  }


  return (
    <>
      <Button
        variant="hero"
        size="lg"
        className={`group text-white max-xxs:!text-xs ${className}`}
        onClick={() => {
          setStep("form");
          setOpenDialog(true);
        }}
      >
        <CalendarIcon className="ml-2" size={20} />
        {t("reservationCalendar.button")}
      </Button>

      <Dialog
        open={openDialog}
        onOpenChange={(open) => {
          setOpenDialog(open);
          if (!open) setStep("form");
        }}
      >
        <DialogContent className="max-w-sm overflow-hidden">
          <DialogHeader>
            <DialogTitle>{t("reservationCalendar.title")}</DialogTitle>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {step === "calendar" ? (
              <motion.div
                key="calendar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className=" flex flex-col items-center"
              >
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => setSelectedDate(date)}
                  className="mx-auto mt-4 "
                />
                <Button
                  disabled={isLoading}
                  onClick={() => {
                    if (selectedDate) {
                   
                      handleReservation();
                    }
                  }}

                  className="mt-4 w-full"
                >
                  {title ? title : isLoading ? t("contactForm.loading") : t("reservationCalendar.confirm")}
                </Button>

              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ContactForm onClick={() => setStep("calendar")} isBooking={true} setFormValues={setFormValues} />
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReservationCalendar;
