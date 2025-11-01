"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetAppointmentsTypes, useGetWorkingDays, usePostAppointment } from "@/hooks/fetch-hooks";
import { toast } from "sonner";
import { CalendarDialog } from "./CalendarDialog";
import { isSameDay, getDay } from "date-fns";
import { useMemo } from "react";

const ContactForm = ({isBooking}: {isBooking?: boolean}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { data: appointmentTypes } = useGetAppointmentsTypes(lang);
  const { data: workingDays } = useGetWorkingDays(lang);
  console.log(workingDays, "workingDays"); 
  const mutation = usePostAppointment();

  // ✅ Schema includes date, time and meeting mode
  const contactSchema = z.object({
    name: z.string().min(2, { message: t("contactForm.nameValidation") }),
    phone: z
      .string()
      .regex(/^[0-9]{9,11}$/, { message: t("contactForm.phoneValidation") }),
    city: z.string().min(2, { message: t("contactForm.required") }),
    appointment_type_id: z.string().nonempty({ message: t("contactForm.required") }),
    date: z.date({ required_error: t("contactForm.required") }),
    time: z.string().nonempty({ message: t("contactForm.required") }),
    book_type: z.enum(["zoom", "office"], { required_error: t("contactForm.required") }),
  });
  type ContactFormValues = z.infer<typeof contactSchema>;

  const [isLoading, setIsLoading] = useState(false);
  const [timeSelectOpen, setTimeSelectOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      appointment_type_id: "",
      date: undefined,
      time: "",
      book_type: "zoom",
    },
  });

  // ✅ Watch selected date for time slot calculation
  const selectedDate = form.watch("date");

  // ✅ Helper: Generate time slots from working hours
  const generateTimeSlots = (startTime: string, endTime: string): string[] => {
    const slots: string[] = [];
    const [startH, startM] = startTime.split(":").map(Number);
    const [endH, endM] = endTime.split(":").map(Number);
    
    let currentMinutes = startH * 60 + startM;
    const endMinutes = endH * 60 + endM;
    
    while (currentMinutes < endMinutes) {
      const hours = Math.floor(currentMinutes / 60);
      const minutes = currentMinutes % 60;
      slots.push(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`);
      currentMinutes += 30; // 30-minute intervals
    }
    
    return slots;
  };

  // ✅ Get available time slots for selected date
  const availableTimeSlots = useMemo(() => {
    console.log(selectedDate, "selectedDate");  
    if (!selectedDate || !workingDays?.data) return [];

    const dayOfWeek = getDay(selectedDate); // 0 = Sunday, 1 = Monday, etc.
    const workingDay = workingDays.data.find((wd) => wd.day_of_week === dayOfWeek);
    console.log(workingDay, "workingDayssssssssssssssss");
    if (!workingDay || !workingDay.working_day_hours?.length) return [];
console.log(workingDay, "s");
    // Collect all time slots from all working hour ranges
    const allSlots: string[] = [];
    workingDay.working_day_hours.forEach((hours) => {
      const slots = generateTimeSlots(hours.start_time, hours.end_time);
      allSlots.push(...slots);
    });

    // Remove duplicates and sort
    return Array.from(new Set(allSlots)).sort();
  }, [selectedDate, workingDays?.data]);

  // ✅ Check if date is a working day
  const isDateDisabled = useMemo(() => {
    return (date: Date): boolean => {
      if (!workingDays?.data) return true; // If no working days data, disable all
      const dayOfWeek = getDay(date);
      const workingDay = workingDays.data.find((wd) => wd.day_of_week === dayOfWeek);
      return !workingDay || !workingDay.working_day_hours?.length;
    };
  }, [workingDays?.data]);

  // ✅ submit handler
  function onSubmit(values: ContactFormValues) {
    setIsLoading(true);
    mutation.mutate(values, {
      onSuccess: () => {
        setIsLoading(false);
        toast.success(t("contactForm.success"));
        form.reset();
      },
    });
  }

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-2 text-start w-full ${isBooking ? "" : "lg:w-3/4"} mx-auto`}
        dir="rtl"
      >
        {/* Meeting mode (Zoom / Office) */}
        <FormField
          control={form.control}
          name="book_type"
          render={({ field }) => (
            <FormItem>
              <Tabs value={field.value} onValueChange={field.onChange} dir="rtl">
                <TabsList className="w-full">
                  <TabsTrigger className="w-1/2" value="zoom">
                    {t("reservationCalendar.mode.zoom")}
                  </TabsTrigger>
                  <TabsTrigger className="w-1/2" value="office">
                    {t("reservationCalendar.mode.office")}
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-full border rounded-lg p-2 lg:p-3 h-12"
                  placeholder={t("contactForm.name")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-full border rounded-lg p-2 lg:p-3 h-12"
                  placeholder={t("contactForm.phone")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* City Field */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-full border rounded-lg p-2 lg:p-3 h-12"
                  placeholder={t("contactForm.city")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Select appointment_type_id */}
        <FormField
          control={form.control}
          name="appointment_type_id"
          render={({ field }) => (
            <FormItem>
              <Select
                dir="rtl"
                onValueChange={(val) => field.onChange(val)}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full border rounded-lg p-2 lg:p-3 h-12">
                    <SelectValue placeholder={t("contactForm.selectOption")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {appointmentTypes?.data?.map((type) => (
                    <SelectItem key={type.id} value={String(type.id)}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ✅ Date Picker Popup */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="text-center">
              <CalendarDialog
                isDateDisabled={isDateDisabled}
                selectedDate={field.value}
                onDateSelect={(date) => {
                  field.onChange(date);
                  // Reset time when date changes
                  form.setValue("time", "");
                  // Close time select if open
                  setTimeSelectOpen(false);
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Time selector */}
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => {
            const now = new Date();
            const isToday = selectedDate ? isSameDay(selectedDate, now) : false;
            
            const handleTimeSelectOpenChange = (open: boolean) => {
              if (open && !selectedDate) {
                toast.error(t("reservationCalendar.selectDateFirst"));
                form.setError("date", {
                  type: "manual",
                  message: t("contactForm.required"),
                });
                setTimeSelectOpen(false);
                return;
              }
              if (open && availableTimeSlots.length === 0) {
                toast.error(t("reservationCalendar.noAvailableTimes"));
                setTimeSelectOpen(false);
                return;
              }
              setTimeSelectOpen(open);
            };
            
            return (
              <FormItem>
                <Select
                  dir="rtl"
                  open={timeSelectOpen}
                  onOpenChange={handleTimeSelectOpenChange}
                  onValueChange={(val) => field.onChange(val)}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full border rounded-lg p-2 lg:p-3 h-12">
                      <SelectValue placeholder={
                        !selectedDate 
                          ? t("reservationCalendar.selectTime")
                          : availableTimeSlots.length === 0
                          ? t("reservationCalendar.noAvailableTimes")
                          : t("reservationCalendar.selectTime")
                      } />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availableTimeSlots.length > 0 ? (
                      availableTimeSlots.map((time) => {
                        const [hh, mm] = time.split(":").map(Number);
                        const timeMinutes = hh * 60 + mm;
                        const nowMinutes = now.getHours() * 60 + now.getMinutes();
                        const blockedByPast = isToday && timeMinutes <= nowMinutes;
                        const disabled = blockedByPast;
                        return (
                          <SelectItem key={time} value={time} disabled={disabled}>
                            {time}
                          </SelectItem>
                        );
                      })
                    ) : (
                      <SelectItem value="no-times" disabled>
                        {t("reservationCalendar.noAvailableTimes")}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button type="submit" isLoading={isLoading} className="w-full">
          {t("contactForm.send")}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
