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
import { format, startOfToday } from "date-fns";
import { useTranslation } from "react-i18next";

export function CalendarDialog({
    selectedDate,
    onDateSelect,
    disabledDates = [],
    isDateDisabled,
}: {
    selectedDate?: Date;
    onDateSelect: (date: Date) => void;
    disabledDates?: string[]; // ISO strings (YYYY-MM-DD) to be disabled
    isDateDisabled?: (date: Date) => boolean; // Function to check if date should be disabled
}) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const handleSelect = (date: Date | undefined) => {
        if (date) {
            onDateSelect(date);
            setOpen(false); // ✅ close the dialog automatically
        }
    };

    // Build disabled rules: past days, provided disabledDates, and custom function
    const disabledRules = [
        { before: startOfToday() },
        ...disabledDates
            .map((iso) => {
                const [y, m, d] = iso.split("-").map(Number);
                if (!y || !m || !d) return null;
                return new Date(y, (m - 1), d);
            })
            .filter(Boolean) as Date[],
        // Custom function to check if date should be disabled
        ...(isDateDisabled ? [(date: Date) => isDateDisabled(date)] : []),
    ];

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
                        disabled={disabledRules}
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
