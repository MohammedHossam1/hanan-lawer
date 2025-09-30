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
import { useGetAppointmentsTypes, usePostAppointment } from "@/hooks/fetch-hooks";
import { toast } from "sonner";

// Validation Schema



const ContactForm = ({ onClick, isBooking, setFormValues }: { onClick?: () => void, isBooking?: boolean, setFormValues?: (form: HTMLFormElement) => void }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language
  const { data: appointmentTypes } = useGetAppointmentsTypes(lang);
  const mutation = usePostAppointment();

  const contactSchema = z.object({
    name: z.string().min(2, { message: t("contactForm.nameValidation") }),
    phone: z
      .string()
      .regex(/^[0-9]{9,11}$/, { message: t("contactForm.phoneValidation") }),
    city: z.string().min(2, { message: t("contactForm.required") }),
    appointment_type_id: z.string().nonempty({ message: t("contactForm.required") }),
  });
  type ContactFormValues = z.infer<typeof contactSchema>;

  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      appointment_type_id: "",
    },
  });

  // Handle form submission and send email via EmailJS
  function onSubmit() {
    if (isBooking) {
      setFormValues(formRef.current)
      if (onClick) onClick();
      return
    }
    if (formRef.current) {
      setIsLoading(true)
      mutation.mutate({
        ...form.getValues(),

      }
        , {
          onSuccess: () => {
            setIsLoading(false)
            toast.success(t("contactForm.success"));
            form.reset();
          },
        })

    }
  }

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-2 text-start w-full ${isBooking ? "" : "lg:w-3/4 "}  mx-auto`}
        dir="rtl"
      >
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
              <FormMessage className="" />
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
        {/* Select appointment_type_id Field */}
        <FormField
          control={form.control}
          name="appointment_type_id"
          render={({ field }) => (
            <FormItem>
              <Select
                dir="rtl"
                onValueChange={(val) => {
                  field.onChange(val);
                }}
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
              <input type="hidden" name="appointment_type_id" value={field.value} />
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit" isLoading={isLoading} className="w-full">
          {t("contactForm.send")}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
