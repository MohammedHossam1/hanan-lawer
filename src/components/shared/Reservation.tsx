"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePostAppointment } from "@/hooks/fetch-hooks";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import { toast } from "sonner";

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
  const [formValues, setFormValues] = useState<any>(null);
  const mutation = usePostAppointment();

  // Handle sending contact (reservation)
  function handleSendContact() {
    // Merge form values and selectedDate
    const dataToSend = {
      ...formValues,
      reservationDate: selectedDate,
    };
    mutation.mutate(dataToSend, { onSuccess: () => {
      setOpenDialog(false);
      setStep("form");
      toast.success(t("contactForm.success"));
    } });
  }

  // Handler to receive form values from ContactForm
  function handleSetFormValues(form: HTMLFormElement | null) {
    if (!form) return;
    const formData = new FormData(form);
    const values: Record<string, any> = {};
    for (const [key, value] of formData.entries()) {
      values[key] = value;
    }
    setFormValues(values);
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
                  isLoading={mutation.isPending}
                  onClick={() => {
                    if (selectedDate) {
                      handleSendContact();
                    }
                  }}
                  className="mt-4 w-full"
                >
                  {title
                    ? title
                    : t("reservationCalendar.confirm")}
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
                <ContactForm
                  onClick={() => setStep("calendar")}
                  isBooking={true}
                  setFormValues={handleSetFormValues}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReservationCalendar;
