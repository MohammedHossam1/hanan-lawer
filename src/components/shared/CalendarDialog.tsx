"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

export function CalendarDialog({
    selectedDate,
    onDateSelect,
}: {
    selectedDate?: Date;
    onDateSelect: (date: Date) => void;
}) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const handleSelect = (date: Date | undefined) => {
        if (date) {
            onDateSelect(date);
            setOpen(false); // ✅ close the dialog automatically
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen} modal={false}>
            <DialogTrigger asChild dir="rtl">
                <Button variant="outline" className="w-full border-gray-200 text-black hover:bg-white hover:text-black" >
                    {selectedDate ? format(selectedDate, "PPP") : t("contactForm.pickDate")}
                </Button>
            </DialogTrigger>

            <DialogContent className="p-0 overflow-hidden max-w-sm" dir="rtl">
                <DialogHeader dir="rtl">
                    <DialogTitle className="text-center pt-4">{t("contactForm.pickDate")}</DialogTitle>
                </DialogHeader>
                <div className="p-4 mx-auto">
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleSelect} // ✅ calls handleSelect
                        className="mx-auto"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
