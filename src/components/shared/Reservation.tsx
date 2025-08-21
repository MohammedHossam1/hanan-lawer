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

const ReservationCalendar = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  const [openCalendar, setOpenCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Button
        variant="hero"
        size="lg"
        className={`group ${className}`}
        onClick={() => setOpenCalendar(true)}
      >
        <CalendarIcon className="ml-2" size={20} />
        {t("reservationCalendar.button")}
      </Button>

      <Dialog open={openCalendar} onOpenChange={setOpenCalendar}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{t("reservationCalendar.title")}</DialogTitle>
          </DialogHeader>

          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => setSelectedDate(date)}
            className="mx-auto mt-4"
          />

          <Button
            onClick={() => setOpenCalendar(false)}
            className="mt-4 w-full"
          >
            {t("reservationCalendar.confirm")}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReservationCalendar;
