import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

const ReservationCalendar = ({
  className,
}: {
  className?: string;
  title?: string;
}) => {
  const { t } = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);
  

  return (
    <>
      <Button
        variant="hero"
        size="lg"
        className={`group text-white max-xxs:!text-xs ${className}`}
        onClick={() => {
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
        }}
      >
        <DialogContent className="max-w-sm overflow-hidden">
          <DialogHeader>
            <DialogTitle>{t("reservationCalendar.title")}</DialogTitle>
          </DialogHeader>

          <AnimatePresence mode="wait">
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ContactForm
              isBooking
              />
            </motion.div>
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReservationCalendar;
