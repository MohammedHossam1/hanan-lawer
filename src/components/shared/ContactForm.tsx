"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
import { toast } from "../ui/use-toast";

// Validation Schema



const ContactForm = ({ onClick, isBooking, setFormValues }: { onClick?: () => void, isBooking?: boolean, setFormValues?: (form: HTMLFormElement) => void }) => {
  const { t } = useTranslation();
  const contactSchema = z.object({
    name: z.string().min(2, { message: t("contactForm.nameValidation") }),
    phone: z
      .string()
      .regex(/^[0-9]{9,11}$/, { message: t("contactForm.phoneValidation")}),
    city: z.string().min(2, { message: t("contactForm.required")}),
    option: z.string().nonempty({ message: t("contactForm.required")}),
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
      option: "",
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

      emailjs
        .sendForm(
          "service_5yoabqk",    // Replace with your service ID
          "template_5yuwlvr",   // Replace with your template ID
          formRef.current,
          "VHEeupUp96UPoCWa_"     // Replace with your public key
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setIsLoading(false)

            toast({
              title: t("contactForm.success"),
              className: "bg-green-500 text-white",
            });
            form.reset(); // Reset the form fields after successful submission
          },
          (error) => {
            setIsLoading(false)

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

        {/* Select Option Field */}
        <FormField
          control={form.control}
          name="option"
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
                  <SelectItem value={t("contactForm.option1")}>{t("contactForm.option1")}</SelectItem>
                  <SelectItem value={t("contactForm.option2")}>{t("contactForm.option2")}</SelectItem>
                  <SelectItem value={t("contactForm.option3")}>{t("contactForm.option3")}</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="option" value={field.value} />
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit" disabled={isLoading} className="w-full">
          {!isLoading ? t("contactForm.send") : t("contactForm.loading")}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
