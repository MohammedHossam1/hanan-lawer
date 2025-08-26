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

const ReservationCalendar = ({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) => {
  const { t } = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);
  const [step, setStep] = useState<"calendar" | "form">("calendar");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Button
        variant="hero"
        size="lg"
        className={`group text-white ${className}`}
        onClick={() => {
          setStep("calendar");
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
          if (!open) setStep("calendar"); // reset عند الغلق
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
                exit={{ opacity: 0}}
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
                  onClick={() => {
                    if (selectedDate) setStep("form");
                  }}
                  className="mt-4 w-full"
                >
                  {title ? title : t("reservationCalendar.confirm")}
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
                <ContactForm   />
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReservationCalendar;
